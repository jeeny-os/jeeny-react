import { useCallback, useEffect, useState } from "react";
import get from "lodash/get";
import { FileUploadInput, useFilesApi } from "..";

export type MediaType = "image" | "video" | "file";
export type MediaCategory =
  | "app"
  | "bid"
  | "equipment"
  | "facility"
  | "kitTemplate"
  | "instructionExecutionStep"
  | "item"
  | "product"
  | "arrival"
  | "tooling"
  | "training"
  | "supplier"
  | "workbench"
  | "workcell";

export interface UseFileUploadProps extends FileUploadInput {
  type: MediaType;
}

export type OnFileUploadSuccessArgs = {
  url: string;
  file: File;
};

export const useFileUpload = (
  onSuccess?: (args: OnFileUploadSuccessArgs) => Promise<void>
) => {
  const [uploadStatus, setUploadStatus] =
    useState<"success" | "failure" | "uploading" | "idle">("idle");
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const {
    getPresignedPost: { query: getPresignedPost, data, loading },
  } = useFilesApi();

  const getPresignPost = useCallback(
    async (presignPostArgs: UseFileUploadProps, file: File) => {
      setUploadStatus("uploading");
      getPresignedPost({
        variables: { args: { ...presignPostArgs } },
      });
      setFile(file);
    },
    [setUploadStatus, getPresignedPost, setFile]
  );

  useEffect(() => {
    const onUpload = async () => {
      if (!file) {
        return;
      }

      try {
        const formData = new FormData();
        const fieldsObject = JSON.parse(data?.getPresignedPost.fields || "{}");
        Object.keys(fieldsObject).forEach((key) =>
          formData.append(key, fieldsObject[key])
        );

        formData.append("file", file);
        const url = data?.getPresignedPost.url;

        if (url == null) {
          return;
        }

        setFileUrl(`https://static.jeeny.com/${fieldsObject.key}`);

        await fetch(url, {
          method: "POST",
          mode: "cors",
          body: formData,
        });

        if (onSuccess != null) {
          await onSuccess({
            url: `https://static.jeeny.com/${fieldsObject.key}`,
            file,
          });
        }

        setUploadStatus("success");
      } catch (e) {
        setUploadStatus("failure");
      }

      setFile(null);
    };

    if (data && !loading) {
      onUpload();
    }
    // TODO why disable exhaustive-deps?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  return {
    fileUrl,
    isLoading: uploadStatus === "uploading",
    uploadFile: getPresignPost,
    uploadStatus,
    presignPostData: get(data, "getPresignedPost", {}),
  };
};

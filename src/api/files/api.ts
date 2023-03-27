import { useLazyQuery, useMutation } from '@apollo/client'
import { FilesApi } from './apiInterface'
import { GET_PRESIGNED_POST } from './gql'

export const useFilesApi = (custom?: FilesApi) => {
  const [
    getPresignedPost,
    { data: getPresignedPostData, loading: getPresignedPostLoading },
  ] = useLazyQuery(
    custom?.getPresignedPost?.query || GET_PRESIGNED_POST,
    custom?.getPresignedPost?.options
  )

  return {
    getPresignedPost: {
      query: getPresignedPost,
      data: getPresignedPostData,
      loading: getPresignedPostLoading,
    },
  }
}

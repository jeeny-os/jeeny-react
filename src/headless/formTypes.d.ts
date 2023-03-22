import {
  FieldValues,
  UseFormProps,
  UseFormRegister,
  UseFormWatch,
  UseFormResetField,
  UseFormGetValues,
  UseFormSetError,
  UseFormClearErrors,
  UseFormSetValue,
  UseFormTrigger,
  FormState,
  UseFormReset,
  UseFormHandleSubmit,
  UseFormUnregister,
  Control,
  UseFormSetFocus,
  FieldErrorsImpl,
} from "react-hook-form";
import * as JeenyTypes from "../types/graphql";
import { Split } from "../types/helpers";
import { FetchResult } from "@apollo/client";
import { ActionResults } from "../types/actionResults";
import { GraphQLError } from "graphql";

export type JeenyFormProps<T> = {
  [K in keyof T]-?: {
    /** The action will be one of the Jeeny API mutations */
    action: NonNullable<K>;
    /** If you are using a save mutation then you should absolutely provide default values to the form, most importantly the `id` value. If you are using a create mutation you may also provide default values if you wish. */
    defaultValues?: Partial<T[K]>;
    renderForm: (props: JeenyFormRenderProps<T[K], K>) => React.ReactElement;
    /** This component uses `react-hook-form` to help ensure you create forms that work with the Jeeny Layer. Please see the Jeeny React storybook docs for more information on how to use `react-hook-form` with this component. */
    reactHookFormProps?: Omit<UseFormProps, "defaultValues">;
  };
}[keyof T];

type JeenyFormFieldValues<T> = { [K in keyof T]: string };

export type JeenyFormRenderProps<T, K> = {
  /** Will call the Jeeny API for the specified action using the input type for `values` */
  submit: (
    onSuccess?: (
      result: FetchResult<
        {
          [index in Split<K, ".">[1]]: ActionResults[K];
        },
        Record<string, any>,
        Record<string, any>
      > | null
    ) => void,
    onFailure?: (
      error: readonly GraphQLError[] | Partial<FieldErrorsImpl<any>>
    ) => void
  ) => Promise<null>;
  isLoading: boolean;
  /** {@link https://react-hook-form.com/api/useform/watch React Hook Form docs} */
  watch: UseFormWatch<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/getvalues React Hook Form docs} */
  getValues: UseFormGetValues<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/getfieldstate React Hook Form docs} */
  getFieldState: UseFormGetFieldState<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/seterror React Hook Form docs} */
  setError: UseFormSetError<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/clearerrors React Hook Form docs} */
  clearErrors: UseFormClearErrors<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/setvalue React Hook Form docs} */
  setValue: UseFormSetValue<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/trigger React Hook Form docs} */
  trigger: UseFormTrigger<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/formstate React Hook Form docs} */
  formState: FormState<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/resetfield React Hook Form docs} */
  resetField: UseFormResetField<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/reset React Hook Form docs} */
  reset: UseFormReset<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/handlesubmit React Hook Form docs} */
  handleSubmit: UseFormHandleSubmit<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/unregister React Hook Form docs} */
  unregister: UseFormUnregister<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/control React Hook Form docs} */
  control: Control<JeenyFormFieldValues<T>, TContext>;
  /** {@link https://react-hook-form.com/api/useform/register React Hook Form docs} */
  register: UseFormRegister<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/setfocus React Hook Form docs} */
  setFocus: UseFormSetFocus<JeenyFormFieldValues<T>>;
};

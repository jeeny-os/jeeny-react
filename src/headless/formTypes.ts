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
  UseFormGetFieldState,
} from "react-hook-form";
import * as JeenyTypes from "../types/graphql";
import { Split } from "../types/helpers";
import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import { ActionResults } from "../types/actionResults";
import { ActionInputs } from "../types/actionInputs";
import { GraphQLError } from "graphql";

export type JeenyFormProps = {
  [K in keyof ActionInputs]-?: {
    /** The action will be one of the Jeeny API mutations */
    action: NonNullable<K>;
    /** If you are using a save mutation then you should absolutely provide default values to the form, most importantly the `id` value. If you are using a create mutation you may also provide default values if you wish. */
    defaultValues?: Partial<ActionInputs[K]>;
    /** Allows for passing Apollo mutation options to the submit function returned in the renderForm prop.
     *
     * Available options can be [seen here at the Apollo docs](https://www.apollographql.com/docs/react/data/mutations/#options)
     */
    mutationOptions?: MutationFunctionOptions;
    renderForm: (
      props: JeenyFormRenderProps<ActionInputs[K], K>
    ) => React.ReactElement;
    /** This component uses `react-hook-form` to help ensure you create forms that work with the Jeeny Layer. Please see the Jeeny React storybook docs for more information on how to use `react-hook-form` with this component. */
    reactHookFormProps?: Omit<UseFormProps, "defaultValues">;
  };
}[keyof ActionInputs];

export type JeenyFormFieldValues<T> = { [K in keyof T]: string };
export type JeenyFormSubmitOnSuccessArgs<K extends keyof ActionResults> = {
  result: FetchResult<
    {
      [index in Split<K, ".">[1]]: ActionResults[K];
    },
    Record<string, any>,
    Record<string, any>
  > | null;
};

export type JeenyFormSubmitOnSuccess<K extends keyof ActionResults> = ({
  result,
}: JeenyFormSubmitOnSuccessArgs<K>) => void;

export type JeenyFormSubmitOnFailure<K extends keyof ActionResults> = (
  error: readonly GraphQLError[] | Partial<FieldErrorsImpl<ActionResults[K]>>
) => void;

export type JeenyFormSubmitType<K extends keyof ActionResults> = (
  onSuccess?: JeenyFormSubmitOnSuccess<K>,
  onFailure?: JeenyFormSubmitOnFailure<K>
) => Promise<null>;

export type JeenyFormRenderProps<T, K extends keyof ActionResults> = {
  /** Will call the Jeeny API for the specified action using the input type for `values` */
  submit: JeenyFormSubmitType<K>;
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
  control: Control<JeenyFormFieldValues<T>, any>;
  /** {@link https://react-hook-form.com/api/useform/register React Hook Form docs} */
  register: UseFormRegister<JeenyFormFieldValues<T>>;
  /** {@link https://react-hook-form.com/api/useform/setfocus React Hook Form docs} */
  setFocus: UseFormSetFocus<JeenyFormFieldValues<T>>;
};

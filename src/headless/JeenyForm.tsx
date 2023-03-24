import React, { useState } from "react";
import { FieldErrorsImpl, FieldValues, useForm } from "react-hook-form";

import { JeenyFormProps } from "./formTypes";
import { ActionInputs } from "../types/actionInputs";
import { useAction, UseActionSubmit } from "../hooks/useActions/useAction";
import { GraphQLError } from "graphql";

export const JeenyForm: React.FC<JeenyFormProps> = ({
  action,
  defaultValues,
  mutationOptions,
  renderForm,
  reactHookFormProps = {},
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formReturn = useForm<ActionInputs[typeof action] | FieldValues>({
    ...reactHookFormProps,
    defaultValues,
  });

  const submit = useAction();

  const onSubmit = (
    success?: (result: any) => void,
    failure?: (
      error: readonly GraphQLError[] | Partial<FieldErrorsImpl<any>>
    ) => void
  ) =>
    formReturn.handleSubmit(
      async (values) => {
        try {
          setIsLoading(true);

          const response = await submit({
            action,
            values,
            mutationOptions,
          } as UseActionSubmit);

          setIsLoading(false);

          if (response?.errors && failure) {
            failure(response.errors);

            return;
          }

          if (success) {
            success(response);
          }
        } catch (e: any) {
          setIsLoading(false);

          if (failure) {
            failure(e);
          }

          throw new Error(e);
        }
      },
      (error) => {
        setIsLoading(false);

        if (failure) {
          failure(error);
        }
      }
    )();

  return (
    <>
      {renderForm({
        ...(formReturn as any),
        submit: onSubmit,
        isLoading,
      })}
    </>
  );
};

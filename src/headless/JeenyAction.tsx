import React, { useState } from "react";
import { useAction, UseActionSubmit } from "../hooks/useActions/useAction";
import { ActionInputs } from "../types/actionInputs";
import { JeenyActionProps } from "./actionTypes";

export const JeenyAction: React.FC<JeenyActionProps> = ({
  action,
  renderChild,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const submit = useAction();

  const onSubmit = async (
    values: ActionInputs[typeof action]
  ): Promise<any> => {
    try {
      setIsLoading(true);

      const response = await submit({
        action,
        values,
      } as UseActionSubmit);

      setIsLoading(false);

      return response;
    } catch (e: any) {
      setIsLoading(false);
      throw new Error(e);
    }
  };

  return <>{renderChild({ submit: onSubmit, isLoading })}</>;
};

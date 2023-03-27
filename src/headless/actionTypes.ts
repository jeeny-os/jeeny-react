import * as JeenyTypes from "../types/graphql";
import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import { ActionInputs } from "../types/actionInputs";
import { ActionResults } from "../types/actionResults";
import { Split } from "../types/helpers";

export type JeenyActionProps = {
  [K in keyof ActionInputs]-?: {
    /** The action will be one of the Jeeny Layer mutations */
    action: NonNullable<K>;
    /** Allows for passing Apollo mutation options to the submit function returned in the renderChild prop.
     *
     * Available options can be [seen here at the Apollo docs](https://www.apollographql.com/docs/react/data/mutations/#options)
     */
    mutationOptions?: MutationFunctionOptions;
    /** This prop expects a function that returns a valid JSX element. It provides a `submit` render prop that can be used by the component returned by the function. The `submit` function will expect the appropriate object type associated with the `action` prop. This ensures that you pass accurate data to the Jeeny API. */
    renderChild: (props: JeenyActionRenderProps<K>) => React.ReactElement;
  };
}[keyof ActionInputs];

export type JeenyActionRenderProps<T extends keyof ActionInputs> = {
  submit: (values: ActionInputs[T]) => Promise<FetchResult<
    {
      [index in Split<T, ".">[1]]: ActionResults[T];
    },
    Record<string, any>,
    Record<string, any>
  > | null>;
  isLoading: boolean;
};

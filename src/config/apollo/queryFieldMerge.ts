import { FieldFunctionOptions, Reference, StoreObject } from "@apollo/client";

export type PaginatedQuery = { cursor: string };

export type QueryFieldMergeReturn = PaginatedQuery & {
  items: (Reference | StoreObject | undefined)[];
};

export const queryFieldMerge = ({
  existing,
  incoming,
  options,
}: {
  existing: QueryFieldMergeReturn;
  incoming: QueryFieldMergeReturn;
  options: FieldFunctionOptions;
}) => {
  const merged = { ...existing?.items };
  incoming.items.forEach((item: any) => {
    merged[options.readField("id", item) as any] = item;
  });

  return {
    cursor: incoming.cursor,
    items: merged,
  };
};

// https://stackoverflow.com/questions/71922154/how-to-split-a-string-into-a-records-in-typescript

/* helper to split a generic type string */
export type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];

// https://stackoverflow.com/questions/54487137/how-to-recursively-omit-key-from-type

/** need to use when there are circular references in types for the JeenyTable component */
export type OmitDistributive<T, K extends PropertyKey> = T extends any
  ? T extends object
    ? Id<OmitRecursively<T, K>>
    : T
  : never;
type Id<T> = {} & { [P in keyof T]: T[P] }; // Cosmetic use only makes the tooltips expad the type can be removed
type OmitRecursively<T extends any, K extends PropertyKey> = Omit<
  { [P in keyof T]: OmitDistributive<T[P], K> },
  K
>;

// https://stackoverflow.com/a/68404823
type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;

type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          DotNestedKeys<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ""
) extends infer D
  ? Extract<D, string>
  : never;

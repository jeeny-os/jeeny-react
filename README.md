<h1 align="center">Welcome to jeeny-react 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.4-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/jeeny-os/jeeny-react#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jeeny-os/jeeny-react/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jeeny-os/jeeny-react/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/jeeny-os/jeeny-react" />
  </a>
</p>

> The jeeny-react package provides an intuitive and typesafe way to interact with the Jeeny API. It is primarily designed to be "headless", just like the Jeeny API.

### 🏠 [Jeeny.com](https://jeeny.com)

## What is Jeeny?

Jeeny is a [warehouse management system and enterprise resource planning API](https://jeeny.com). It is a headless system for procurement, inventory, standard operating procedures, manufacturing, and fulfillment. Without replacing your current systems you can extend, enhance, and embed in order to create the customizations your teams need.

## Table of contents

- [What is a headless front end?](#what-is-a-headless-front-end)
- [Installation](#installation)
- [Authentication](#authentication)
- [Tables](#tables)
- [Forms](#forms)
- [Actions](#actions)
- [Hooks](#hooks)
- [Formatters](#formatters)
- [JavaScript SDK](#javascript-sdk)

## What is a headless front end?

A headless front end library separates the UI from the logic. This lets the developer focus on user experience without having to think too much about how to retrieve, manipulate, and store data.

For example, the JeenyTable component returns no HTML tags. However, it has a `renderTable` prop where you supply your own table design. By defining the props for `query`, `variables`, and `columns` in the JeenyTable component, your table will automatically receive the data you want to display. Based on the value you enter for `query`, you will get autocomplete and typechecking functionality for the `variables` and `columns` props.

The goal is twofold - make it impossible to fail and let the API documentation fade into the background by making it part of the components. You will of course need to be using TypeScript to take full advantage of these features. The package can be used with good old JavaScript too though.

## Installation

Yarn
`yarn add @jeeny/jeeny-react`

npm
`npm install @jeeny/jeeny-react`

## Authentication

You must wrap your application in the JeenyProvider component and pass it your headless API key. This provider allows downstream components to authenticate with the Jeeny graphql server.

It includes the ApolloProvider component from the [React Apollo Client](https://www.apollographql.com/docs/react/). This means that the Jeeny hooks and components can take advantage of features like caching and the Apollo devtools.

You can get your free API key from the [Jeeny Hub under the Headless menu](https://hub.jeeny.com/headless/api-keys).

```
import { JeenyProvider } from "@jeeny/jeeny-react"
<React.StrictMode>
	<JeenyProvider apiKey="YOUR_API_KEY">
		<App  />
	</JeenyProvider>
</React.StrictMode>
```

## Tables

> A headless wrapper that helps you create type-checked tables that work with the Jeeny API. The wrapper is an extension of [TanStack Table v8.](https://tanstack.com/table/v8)

The JeenyTable component is a headless component. It lets you take care of design and user experience while providing a typesafe way to easily access the Jeeny API.

The JeenyTable component gives you easy access to every list query in the Jeeny API.

The JeenyTable component has four main props. The first prop, `query`, indicates what GraphQL query you wish to interact with. Depending on that prop, whether it is `supplierItem.getSupplierItemsByItem` or `items.getItems`, the expectations of the `variables` and `columns` props will change. In the code example below, the variables prop expects a shape that matches `QueryGetSupplierItemsByItemArgs` and the columns prop will only accept `id` values that are in the `SupplierItem` record.

<details>
<summary>Sample code</Summary>

```
<JeenyTable
    query="supplierItem.getSupplierItemsByItem"
    variables={{ itemId: "6e6c677a-374b-47fc-8944-f215f56436b6" }}
    columns={[
      {
        id: "id",
      },
      {
        id: "brand",
      },
      {
        id: "brandSku",
        columnDef: {
          cell: (info) => info.getValue().toUpperCase(),
        },
      },
    ]}
    renderTable={({ table }) => {
      return (
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      );
    }}
  />
```

</details>

| Prop                          | Type                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                               |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| query                         | string <br /><br />(JeenyQueries)                                                                                                                                      | The name of one of the Jeeny API queries. Determines which endpoint to hit.                                                                                                                                                                                                               |
| variables                     | {[variable: string]: string \| number \| boolean}<br /><br /> (ListQueryInputs[typeof query])                                                                          | Any variables that might be required by the query entered into the `query` prop. Must be an empty object if no variables are required.                                                                                                                                                    |
| columns                       | {id: string, columnDef: ColumnDef}[] <br /><br />({ id: DeepKeys<QueryResultTypes[typeof query]>; columnDef: DisplayColumnDef<QueryResultTypes[typeof query, any>;}[]) | `id` must be a property of the record type that the query returns. It is the accessor that determines what value to display in the column. `columnDef` is a [TanStack table property](https://tanstack.com/table/v8/docs/api/core/column-def) that provides column settings for rendering |
| renderTable                   | ({ table }: { table: Table\<JeenyRecord\> }) => React.ReactElement                                                                                                     | Renders your table. Must follow the guidelines from TanStack. The [Table object definition can be viewed here](https://tanstack.com/table/v8/docs/api/core/table#table-api).                                                                                                              |
| tanstackTableProps (optional) | Omit<TableOptions\<JeenyRecord\>, "columns" \| "data" \| "getCoreRowModel")                                                                                            | Additional configuration options that will be passed to TanStack table. Must follow the shape from TanStack. The [TableOptions definition can be viewed here](https://tanstack.com/table/v8/docs/api/core/table).                                                                         |

## Forms

> A headless wrapper that helps you create type-checked forms that work with the Jeeny API. The wrapper is an extension of [React Hook Form.](https://react-hook-form.com)

The JeenyForm component is a headless component. It lets you take care of design and user experience while providing a typesafe way to easily access the Jeeny API.

The JeenyForm component gives you easy access to every mutation in the Jeeny API. Through it's `renderForm` prop you receive the return values of a fully typed React Hook Form useForm hook. The typing comes from the value that you enter into the `action` prop. For example, a JeenyForm with action `item.create` will only let you register inputs for properties in the `Item` record.

The JeenyForm component has three main props. The first prop, `action`, indicates what GraphQL mutation you wish to interact with. Depending on that prop, whether it is createItem or pickLocation, the expectations of the `defaultValues` and `renderForm` props will change. In the code example below, those two props expect to see the Jeeny Type `CreateItemInput`.

If we were to change the `action` to "saveSupplier" then those two props would then expect to use the Jeeny Type `SupplierInputUpdate`.

<details>
<summary>Sample code</Summary>

```
  <JeenyForm
    action="item.createItem"
    defaultValues={{
      status: "active",
    }}
    reactHookFormProps={{
      mode: "onTouched",
    }}
    renderForm={({ formState: { errors }, register, submit }) => (
      <form onSubmit={submit} className="flex flex-col gap-2 w-96">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            {...register("name")}
            className="rounded border border-gray-300"
          />
          {errors.name && <span>Name is required</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            {...register("description")}
            className="rounded border border-gray-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="classification">Classification</label>
          <input
            type="text"
            {...register("classification")}
            className="rounded border border-gray-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="unitsOfMeasure.bom">
            Bill of materials unit of measure
          </label>
          <input
            type="text"
            className="rounded border border-gray-300"
            {...register("unitsOfMeasure.bom" as any)}
          />
        </div>
      </form>
    )}
  />
```

</details>

| Prop                          | Type                                                                | Description                                                                                                                                                                                                                                               |
| ----------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action                        | string <br /><br />(JeenyActions)                                   | The name of one of the Jeeny API mutations. Determines which endpoint to hit.                                                                                                                                                                             |
| defaultValues                 | {[property: string]: any}<br /><br /> (a partial Jeeny record type) | Values entered here will prepopulate the form. Useful for setting defaults as well as when conducting save mutations. You should prepopulate the form with the existing values of the record.                                                             |
| renderForm                    | (form: JeenyFormRenderProps\<JeenyRecord\> }) => React.ReactElement | Renders your form and is an extension of UseFormReturn. Must follow the guidelines from React Hook Form when using the properties for rendering. The [UseFormReturn object definition can be viewed here](https://react-hook-form.com/ts/#UseFormReturn). |
| reactHookFormProps (optional) | Omit<UseFormProps, "defaultValues">                                 | Additional configuration options that will be passed to React Hook Form. Must follow the shape from React Hook Form. The [definition can be viewed here](https://react-hook-form.com/ts/#UseFormProps).                                                   |

## Actions

> A headless wrapper for type-checked Jeeny mutations. Render any element and receive a submit handler to execute the desired mutation.

The JeenyAction component is a headless component. It lets you take care of design and user experience while providing a typesafe way to easily access the Jeeny Layer.

The JeenyAction component gives you easy access to every mutation in the Jeeny Layer. Through it's `childRender` prop you receive a fully typed `submit` function that you can use however you want, whether it's an onClick event or added to any other logic you require. The `submit` function will let you know if it's input does not match what the API expects.

The JeenyAction component takes two props. The first prop, `action`, indicates what GraphQL mutation you wish to interact with. Depending on that prop, whether it is `createItem` or `pickLocation`, the expectations of the second prop will change. In the source code below you can see we that what we want to render is a button. The JeenyAction component provides no styling and has no HTML elements. It's purpose is to pass a typed submit function to your UI and handle any interactions with the API.

The submit function that we passed to our button's onClick in our example will only accept the object with a shape that matches the Jeeny `TypeItemInput`. If we were to change the action to `saveSupplier` then the submit function would then expect an object with a shape that matches the Jeeny Type `SupplierInputUpdate`.

<details>
<summary>Sample code</Summary>

```
<JeenyAction
  action="item.createItem"
  renderChild={({ submit }) => (
    <button
      onClick={() => {
        submit({
          name: "Raspberry Punch Kombucha Extreme",
          partNumber: "RPKE",
          status: "active",
        });
      }}
    >
      My creator made me a button but I can be anything I want to be!
    </button>
  )}
/>
```

</details>

| Prop        | Type                                                                                         | Description                                                                                                                                                                                                                                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action      | string <br /><br />(JeenyActions)                                                            | The action will be one of the Jeeny Layer mutations.                                                                                                                                                                                                                                                                |
| renderChild | (props: { submit: (values: ActionInputs[action]) => Promise<boolean>) => React.ReactElement; | This prop expects a function that returns a valid JSX element. It provides a submit render prop that can be used by the component returned by the function. The submit function will expect the appropriate object type associated with the action prop. This ensures that you pass accurate data to the Jeeny API. |

## Hooks

The hooks in this package provide an easy way to get direct access to the API. The API hooks can be considered a wrapper around the Apollo Client hooks. The hooks return functions you can use to retrieve or mutate data, the loading state of the actions, and the response data. Like the other utilities in this package, they are fully typed.

Each query function is actually a wrapper around the Apollo Client `useLazyQuery` hook and the mutations are a wrapper around the `useMutation` hook. This means that the full APIs for both of those hooks are provided on each and every Jeeny hook. You can find Apollo's documentation on `useLazyQuery` [here](https://www.apollographql.com/docs/react/data/queries/#usequery-api) and their documentation on `useMutation` [here](https://www.apollographql.com/docs/react/data/mutations#usemutation-api). This will let you customize options such as fetch policy, caching, error handling, and more.

The hooks can be thought of as a self-documenting API package.

<details>
<summary>Sample code</Summary>

```
const {
  getItem: {
    query: getItem,
    data,
    loading
  }
} = useItem({
  getItem: {
    options: {
      onCompleted: (data) => dropTheBalloons();
    }
  }
})

useEffect(() => {
  getItem({variables: { id }})
}, [getItem, id])

if (isLoading) {
  return <Loader />
}

const item = data.getItem;

return <div>
  {item.name}
</div>
```

</details>

The following hooks are available for use. `useApi` is also available to access all of the below hooks at once.

| Hook                                   | Record associations                                                                                                                                                         |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| useAppApi                              | App                                                                                                                                                                         |
| useArrivalApi                          | [Arrival, ArrivalDetails, ArrivalRelease, ArrivalDelivery, ArrivalLineItem, ArrivalReleaseLineItem, ArrivalDeliveryLineItem](https://dev.jeeny.com/data-and-logic/arrivals) |
| useBidApi                              | [BidRequest, Bid, BidRequestLineItem, BidLineItem](https://dev.jeeny.com/data-and-logic/bids)                                                                               |
| useCompanyApi                          | Company                                                                                                                                                                     |
| useCompanyUserApi                      | CompanyUser                                                                                                                                                                 |
| useDepartureApi                        | [Departure, DeparturePickList, DeparturePick, DepartureLineItem, DeparturePickListLineItem, DeparturePickLineItem](https://dev.jeeny.com/data-and-logic/departures)         |
| useDeviceApi                           | Device                                                                                                                                                                      |
| useDynamicContainerApi                 | [DynamicContainer](https://dev.jeeny.com/data-and-logic/dynamic-containers)                                                                                                 |
| useEventApi                            | [Event](https://dev.jeeny.com/data-and-logic/events)                                                                                                                        |
| useFacilityApi                         | [Facility, FacilityDetails](https://dev.jeeny.com/data-and-logic/facilities)                                                                                                |
| useFacilityItemApi                     | [FacilityItem](https://dev.jeeny.com/data-and-logic/facility-items)                                                                                                         |
| useInstructionApi                      | [InstructionTemplate, InstructionExecution, InstructionSubject](https://dev.jeeny.com/data-and-logic/instructions)                                                          |
| useInventoryAreaApi                    | [StorageInventoryArea](https://dev.jeeny.com/data-and-logic/inventory-areas)                                                                                                |
| useInventoryRecordApi                  | [InventoryRecord, InventoryLog](https://dev.jeeny.com/data-and-logic/inventory-records)                                                                                     |
| useItemStorageInventoryAreaLocationApi | [ItemStorageInventoryAreaLocation](https://dev.jeeny.com/data-and-logic/static-item-locations)                                                                              |
| useItemStorageInventoryAreaRuleApi     | [ItemStorageInventoryAreaRule](https://dev.jeeny.com/data-and-logic/static-item-locations)                                                                                  |
| useItemApi                             | [Item, ItemDetails](https://dev.jeeny.com/data-and-logic/items)                                                                                                             |
| useItemGroupApi                        | [ItemGroup](https://dev.jeeny.com/data-and-logic/item-groups)                                                                                                               |
| useKioskApi                            | Kiosk                                                                                                                                                                       |
| useKitApi                              | [KitTemplate, KitTemplatePart, KitTemplatePartOption, KitTemplateTree, KitTemplateBomEntry](https://dev.jeeny.com/data-and-logic/kits)                                      |
| useOperatorApi                         | Operator, SafeOperator                                                                                                                                                      |
| useProductApi                          | [Product](https://dev.jeeny.com/data-and-logic/products)                                                                                                                    |
| useStorageInventoryApi                 | StorageInventory                                                                                                                                                            |
| useStorageInventoryAreaLocationApi     | [StorageInventoryAreaLocation, StorageInventoryAreaLocationPayload](https://dev.jeeny.com/data-and-logic/storage-locations)                                                 |
| useStorageInventoryAreaRuleApi         | [StorageInventoryAreaRule](https://dev.jeeny.com/data-and-logic/storage-locations)                                                                                          |
| useSupplierApi                         | [Supplier](https://dev.jeeny.com/data-and-logic/suppliers)                                                                                                                  |
| useSupplierItemApi                     | [SupplierItem](https://dev.jeeny.com/data-and-logic/supplier-items)                                                                                                         |
| useTeamApi                             | Team                                                                                                                                                                        |

## Formatters

Formatters provide an easy way to get the main identifier of a record type. By passing a record's ID to the correct formatter you will receive it's `name` property (or the property most closely associated with name. e.g. the ArrivalFormatter will return the ArrivalNumber).

<details>
<summary>Sample code</Summary>

```
return <div>
  <span className="font-bold"><SupplierFormatter id="foo"></span>
</div>
```

</details>

The following formatters are available for use.

| Component                    | Returned property associations                                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ArrivalFormatter             | arrivalNumber                                                                                                                      |
| CompanyUserFormatter         | `${firstName} ${lastName}`                                                                                                         |
| DepartureFormatter           | externalOrderId                                                                                                                    |
| DeviceFormatter              | name                                                                                                                               |
| EmployeeFormatter            | `${firstName} ${lastName}`                                                                                                         |
| EventFormatter               | name                                                                                                                               |
| FacilityFormatter            | name                                                                                                                               |
| InstructionSubjectFormatter  | Returns the corresponding formatter for the subject type (e.g. returns `<SupplierFormatter />` if the `subjectType` is `supplier`) |
| InstructionTemplateFormatter | name                                                                                                                               |
| InventoryAreaFormatter       | name                                                                                                                               |
| ItemFormatter                | name                                                                                                                               |
| OperatorFormatter            | `${firstName} ${lastName}`                                                                                                         |
| ProductFormatter             | name                                                                                                                               |
| SupplierFormatter            | name                                                                                                                               |
| SupplierItemFormatter        | supplier.name and/or item.partNumber and/or item.name                                                                              |
| TeamFormatter                | name                                                                                                                               |

## JavaScript SDK

If you're not working with React you might be looking for our JavaScript/TypeScript SDK. [Check it out here.](https://github.com/jeeny-os/jeeny-js-sdk)

## Author

👤 **Jeeny**

- Website: https://jeeny.com
- Github: [@jeeny-os](https://github.com/jeeny-os)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jeeny-os/jeeny-react/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Jeeny](https://github.com/jeeny-os).<br />
This project is [MIT](https://github.com/jeeny-os/jeeny-react/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

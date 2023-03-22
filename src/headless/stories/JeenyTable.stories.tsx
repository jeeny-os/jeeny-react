import { ComponentStory, ComponentMeta } from "@storybook/react";
import { flexRender } from "@tanstack/react-table";

import { JeenyTable } from "../JeenyTable";
import JeenyTableDocs from "./JeenyTableDocs.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Headless Components/JeenyTable",
  component: JeenyTable,
  parameters: {
    docs: {
      page: JeenyTableDocs,
      source: {
        type: "code",
      },
    },
  },
} as ComponentMeta<typeof JeenyTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example: ComponentStory<typeof JeenyTable> = () => (
  <JeenyTable
    query="supplierItem.getSupplierItemsByItem"
    variables={{ itemId: "6e6c677a-374b-47fc-8944-f215f56436b6" }}
    columns={[
      {
        id: "brand",
        columnDef: {
          cell: (info) => info.getValue(),
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
);

Example.storyName = "Generic example";

export const BadExample: ComponentStory<typeof JeenyTable> = () => (
  <JeenyTable
    query="supplierItem.getSupplierItemsByItem"
    // supplierId is not the right variable for this query and so this will fail the typecheck!
    variables={{ supplierId: "6e6c677a-374b-47fc-8944-f215f56436b6" } as any}
    columns={[
      {
        id: "brand",
        columnDef: {
          cell: (info) => info.getValue(),
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
);

BadExample.storyName = "Typecheck fail";
BadExample.parameters = {
  docs: {
    page: false,
  },
};

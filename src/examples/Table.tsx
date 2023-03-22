import { flexRender } from "@tanstack/react-table";
import { JeenyTable } from "../headless";

export const TableExample = () => {
  return (
    <div className="App">
      <JeenyTable
        query="supplierItem.getSupplierItemsBySupplier"
        variables={{ supplierId: "31e84e68-ba7a-4d14-b8c6-a4cf464376f7" }}
        columns={[
          {
            id: "item.name",
          },
          {
            id: "brand",
          },
          {
            id: "brandSku",
            columnDef: {
              cell: (info) => info.getValue()?.toUpperCase(),
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
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
    </div>
  );
};

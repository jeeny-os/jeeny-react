import React from "react";
import ReactDOM from "react-dom/client";
import { ActionExample, FormExample } from "./examples";
import { TableExample } from "./examples/Table";
import { JeenyProvider } from "./providers/JeenyProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* add your API key to a .env file in order to run these examples */}
    <JeenyProvider apiKey={import.meta.env.VITE_JEENY_API_KEY}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <div
            style={{ fontWeight: "700", fontSize: "36px", marginBottom: "8px" }}
          >
            JeenyTable
          </div>
          <TableExample />
        </div>
        <div>
          <div
            style={{ fontWeight: "700", fontSize: "36px", marginBottom: "8px" }}
          >
            JeenyForm
          </div>
          <FormExample />
        </div>
        <div>
          <div
            style={{ fontWeight: "700", fontSize: "36px", marginBottom: "8px" }}
          >
            JeenyAction
          </div>
          <ActionExample />
        </div>
      </div>
    </JeenyProvider>
  </React.StrictMode>
);

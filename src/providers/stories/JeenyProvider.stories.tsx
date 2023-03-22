import { ComponentStory, ComponentMeta } from "@storybook/react";
import JeenyProviderDocs from "./JeenyProviderDocs.mdx";
import { JeenyProvider } from "../JeenyProvider";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "API Authentication/JeenyProvider",
  component: JeenyProvider,
  parameters: {
    docs: {
      page: JeenyProviderDocs,
      source: {
        type: "code",
      },
    },
  },
} as ComponentMeta<typeof JeenyProvider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example: ComponentStory<typeof JeenyProvider> = () => (
  <JeenyProvider apiKey="YOUR_API_KEY">
    <div style={{ fontWeight: 700, fontSize: "24px" }}>
      This is my application wrapped in the JeenyProvider component.
    </div>
    <div
      style={{
        marginTop: "2px",
        fontWeight: 500,
        fontSize: "16px",
        color: "#6b7280",
        maxWidth: "600px",
      }}
    >
      It's a necessary component and should be placed at the top level of my
      app. <br />
      Without it, none of the components from the Jeeny-React package will work.
    </div>
  </JeenyProvider>
);

Example.storyName = "Provider with UI";

const App = () => null;

export const CodeExample: ComponentStory<typeof JeenyProvider> = () => (
  <React.StrictMode>
    <JeenyProvider apiKey="YOUR_API_KEY">
      <App />
    </JeenyProvider>
  </React.StrictMode>
);

CodeExample.storyName = "Typical code example";

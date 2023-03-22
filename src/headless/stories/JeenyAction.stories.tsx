import { ComponentStory, ComponentMeta } from "@storybook/react";
import JeenyActionDocs from "./JeenyActionDocs.mdx";
import { JeenyAction } from "../JeenyAction";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Headless Components/JeenyAction",
  component: JeenyAction,
  parameters: {
    docs: {
      page: JeenyActionDocs,
      source: {
        type: "code",
      },
    },
  },
} as ComponentMeta<typeof JeenyAction>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example: ComponentStory<typeof JeenyAction> = () => (
  <JeenyAction
    action="item.createItem"
    renderChild={({ submit }) => (
      <button
        className="bg-blue-600 text-white hover:bg-blue-700"
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
);

Example.storyName = "Generic example";

export const BadExample: ComponentStory<typeof JeenyAction> = () => (
  <JeenyAction
    action="item.createItem"
    renderChild={({ submit }) => (
      <button
        className="bg-rose-600 text-white hover:bg-rose-700"
        onClick={() => {
          submit({
            name: "Raspberry Punch Kombucha Extreme",
            partNumber: "RPKE",
            // This will not compile because the submit function does not accept the property smellsLike
            // because it is not an accepted key for the item.create action
            smellsLike: "feet",
            status: "active",
          } as any);
        }}
      >
        My submit function is wrong! (look at my code)
      </button>
    )}
  />
);

BadExample.storyName = "Typecheck fail";
BadExample.parameters = {
  docs: {
    page: false,
  },
};

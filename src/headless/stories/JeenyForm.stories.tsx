import { ComponentStory, ComponentMeta } from "@storybook/react";

import { JeenyForm } from "../JeenyForm";
import JeenyFormDocs from "./JeenyFormDocs.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Headless Components/JeenyForm",
  component: JeenyForm,
  parameters: {
    docs: {
      page: JeenyFormDocs,
      source: {
        type: "code",
      },
    },
  },
} as ComponentMeta<typeof JeenyForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Example: ComponentStory<typeof JeenyForm> = () => (
  <JeenyForm
    action="item.createItem"
    defaultValues={{
      status: "active",
    }}
    reactHookFormProps={{
      mode: "onTouched",
    }}
    renderForm={({ formState: { errors }, register, submit }) => {
      const handleSubmitClick = async () => {
        const itemResponse = await submit();

        console.log({ itemResponse });
      };

      return (
        <div className="flex flex-col gap-2 w-96">
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

          <button
            style={{
              padding: "4px",
              backgroundColor: "cyan",
              cursor: "pointer",
            }}
            onClick={handleSubmitClick}
          >
            Submit form
          </button>
        </div>
      );
    }}
  />
);

Example.storyName = "Generic example";

export const BadExample: ComponentStory<typeof JeenyForm> = () => (
  <JeenyForm
    action="item.createItem"
    defaultValues={{
      status: "active",
    }}
    reactHookFormProps={{
      mode: "onTouched",
    }}
    renderForm={({ formState: { errors }, register, submit }) => {
      const handleSubmitClick = async () => {
        const itemResponse = await submit();

        console.log({ itemResponse });
      };

      return (
        <div className="flex flex-col gap-2 w-96">
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
            <label htmlFor="classification">
              Smells Like (this property doesn't exist!)
            </label>
            <input
              type="text"
              // The next line fails the type check because the property smellsLike
              // does not exist on CreateItemInput
              {...register("smellsLike" as any)}
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

          <button
            style={{
              padding: "4px",
              backgroundColor: "cyan",
              cursor: "pointer",
            }}
            onClick={handleSubmitClick}
          >
            Submit form
          </button>
        </div>
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

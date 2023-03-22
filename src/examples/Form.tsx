import { JeenyForm } from "../headless";

export const FormExample = () => {
  return (
    <div className="App">
      <JeenyForm
        action="item.createItem"
        defaultValues={{
          status: "active",
        }}
        reactHookFormProps={{
          mode: "onTouched",
        }}
        renderForm={({
          formState: { errors },
          register,
          submit,
          isLoading,
        }) => {
          const handleSubmitClick = async () => {
            await submit(
              (response) => console.log({ response }),
              (error) => console.log({ error })
            );
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
                  backgroundColor: isLoading ? "gray" : "cyan",
                  cursor: isLoading ? "progress" : "pointer",
                }}
                onClick={handleSubmitClick}
              >
                Submit form
              </button>
            </div>
          );
        }}
      />
    </div>
  );
};

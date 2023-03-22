import { JeenyAction } from "../headless";

export const ActionExample = () => {
  return (
    <div className="App">
      <JeenyAction
        action="item.createItem"
        renderChild={({ submit, isLoading }) => {
          const handleSubmitClick = async () => {
            const itemResponse = await submit({
              name: "Raspberry Punch Kombucha Extreme",
              partNumber: "RPKE",
              status: "active",
            });

            console.log({ itemResponse });
          };

          return (
            <button
              style={{
                padding: "4px",
                backgroundColor: isLoading ? "gray" : "cyan",
                cursor: isLoading ? "progress" : "pointer",
              }}
              onClick={handleSubmitClick}
            >
              My creator made me a button but I can be anything I want to be!
            </button>
          );
        }}
      />
    </div>
  );
};

import React from "react";

interface FormatLoaderProps {}

export const FormatLoader: React.FC<FormatLoaderProps> = () => {
  return (
    <span
      className="inline-block bp3-skeleton rounded"
      style={{ height: "16px", width: "60px" }}
    />
  );
};

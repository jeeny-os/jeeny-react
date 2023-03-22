import get from "lodash/get";
import React, { useEffect } from "react";
import { FormatLoader, useInstructionApi } from "../..";

interface InstructionTemplateFormatterProps {
  /** The id of the instructionTemplate record */
  id: string;
}

/** Returns the instructionTemplate name inside of an unstyled span tag */
export const InstructionTemplateFormatter: React.FC<InstructionTemplateFormatterProps> =
  ({ id }) => {
    const {
      getInstructionTemplate: { query: getInstructionTemplate, data, loading },
    } = useInstructionApi({
      getInstructionTemplate: {
        options: {
          fetchPolicy: "cache-first",
        },
      },
    });

    useEffect(() => {
      getInstructionTemplate({ variables: { id } });
    }, [getInstructionTemplate, id]);
    const name = get(data, "getInstructionTemplate.name", "");

    if (loading) {
      return <FormatLoader />;
    }

    return <span>{name}</span>;
  };

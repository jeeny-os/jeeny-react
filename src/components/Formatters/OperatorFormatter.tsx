import React, { useEffect } from "react";
import get from "lodash/get";
import { useOperatorApi } from "../../api";
import { FormatLoader } from "../";

interface OperatorFormatterProps {
  /** The id of the operator record */
  id: string;
}

/** Returns the operator first and last names inside of an unstyled span tag */
export const OperatorFormatter: React.FC<OperatorFormatterProps> = ({ id }) => {
  const {
    getOperator: { query: getOperator, loading, data },
  } = useOperatorApi();

  useEffect(() => {
    getOperator({ variables: { id } });
  }, [getOperator, id]);

  if (loading) {
    return <FormatLoader />;
  }

  const name = `${get(data, "getOperator.firstName", "")} ${get(
    data,
    "getOperator.lastName",
    ""
  )}`;

  return <span>{name}</span>;
};

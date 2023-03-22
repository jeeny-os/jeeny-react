import React, { useEffect } from "react";
import get from "lodash/get";
import { FormatLoader } from "../";
import { useDepartureApi } from "../..";

interface DepartureFormatterProps {
  /** The id of the departure record */
  id: string;
}

/** Returns the departures externalOrderId inside of an unstyled span tag */
export const DepartureFormatter: React.FC<DepartureFormatterProps> = ({
  id,
}) => {
  const {
    getDeparture: { query: getDeparture, data, loading },
  } = useDepartureApi({
    getDeparture: {
      options: {
        fetchPolicy: "cache-first",
      },
    },
  });

  useEffect(() => {
    getDeparture({ variables: { id } });
  }, [getDeparture, id]);

  const externalOrderId = get(data, "getDeparture.externalOrderId", "");

  if (loading) {
    return <FormatLoader />;
  }

  return <span>{externalOrderId}</span>;
};

import React, { useEffect } from "react";
import get from "lodash/get";
import { useArrivalApi } from "../../api/arrival/api";
import { FormatLoader } from "..";

interface ArrivalFormatterProps {
  /** The id of the arrival record */
  id: string;
}

/** Returns the arrival arrivalNumber inside of an unstyled span tag */
export const ArrivalFormatter: React.FC<ArrivalFormatterProps> = ({ id }) => {
  const {
    getArrival: { query: getArrival, data, loading },
  } = useArrivalApi();

  useEffect(() => {
    getArrival({ variables: { id } });
  }, []);

  const arrivalNumber = get(data, "getArrival.arrivalNumber", "");

  if (loading) {
    return <FormatLoader />;
  }

  return <span>{arrivalNumber}</span>;
};

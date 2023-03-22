import React, { useEffect } from "react";
import get from "lodash/get";
import { FormatLoader } from "..";
import { useFacilityApi } from "../../api";

interface FacilityFormatterProps {
  /** The id of the facility record */
  id: string;
}

/** Returns the facility name inside of an unstyled span tag */
export const FacilityFormatter: React.FC<FacilityFormatterProps> = ({ id }) => {
  const {
    getFacility: { query: getFacility, data, loading },
  } = useFacilityApi();

  useEffect(() => {
    getFacility({ variables: { id } });
  }, []);

  const name = get(data, "getFacility.name", "");

  if (loading) {
    return <FormatLoader />;
  }

  return <span>{name}</span>;
};

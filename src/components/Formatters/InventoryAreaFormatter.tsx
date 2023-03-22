import React, { useEffect } from "react";
import get from "lodash/get";
import { FormatLoader } from "..";
import { useFacilityApi } from "../../api";
import { FacilityInventoryArea } from "../../types/graphql";

interface InventoryAreaFormatterProps {
  /** The id of the facility record that the inventoryArea is in */
  facilityId: string;
  /** The id of the inventoryArea record */
  id: string;
}

/** Returns the inventoryArea name inside of an unstyled span tag */
export const InventoryAreaFormatter: React.FC<InventoryAreaFormatterProps> = ({
  facilityId,
  id,
}) => {
  const {
    getFacility: { query: getFacility, data, loading },
  } = useFacilityApi({
    getFacility: {
      options: {
        fetchPolicy: "cache-first",
      },
    },
  });

  useEffect(() => {
    getFacility({ variables: { id: facilityId } });
  }, [facilityId, getFacility]);

  if (loading) {
    return <FormatLoader />;
  }

  const inventoryAreas = get(
    data,
    "getFacility.inventoryAreas",
    []
  ) as FacilityInventoryArea[];
  const supermarket = inventoryAreas.find(
    (supermarket) => supermarket.id === id
  );

  if (!supermarket) {
    return null;
  }

  return <span>{supermarket.name}</span>;
};

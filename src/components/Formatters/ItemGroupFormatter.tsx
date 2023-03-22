import React, { useEffect } from "react";
import get from "lodash/get";
import { useItemApi } from "../../api/item/api";
import { FormatLoader } from "..";
import { useItemGroupApi } from "../../api";

interface ItemFormatterProps {
  /** The id of the itemGroup record */
  id: string;
}

/** Returns the itemGroup name inside of an unstyled span tag */
export const ItemGroupFormatter: React.FC<ItemFormatterProps> = ({ id }) => {
  const {
    getItemGroupDetails: { query: getItemGroupDetails, data, loading },
  } = useItemGroupApi();

  useEffect(() => {
    getItemGroupDetails({ variables: { id } });
  }, []);

  const name = get(data, "getItemGroupDetails.itemGroup.name", "");

  if (loading) {
    return <FormatLoader />;
  }

  return <span>{name}</span>;
};

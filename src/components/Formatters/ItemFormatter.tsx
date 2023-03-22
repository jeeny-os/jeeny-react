import React, { useEffect } from "react";
import get from "lodash/get";
import { useItemApi } from "../../api/item/api";
import { FormatLoader } from "..";

interface ItemFormatterProps {
  /** The id of the item record */
  id: string;
}

/** Returns the item name inside of an unstyled span tag */
export const ItemFormatter: React.FC<ItemFormatterProps> = ({ id }) => {
  const {
    getItem: { query: getItem, data, loading },
  } = useItemApi();

  useEffect(() => {
    getItem({ variables: { id } });
  }, []);

  const name = get(data, "getItem.name", "");

  if (loading) {
    return <FormatLoader />;
  }

  return <span>{name}</span>;
};

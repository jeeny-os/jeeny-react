import React, { useEffect } from "react";
import get from "lodash/get";
import { FormatLoader } from "..";
import { useProductApi } from "../../api";

interface ProductFormatterProps {
  /** The id of the product record */
  id: string;
}

/** Returns the product name inside of an unstyled span tag */
export const ProductFormatter: React.FC<ProductFormatterProps> = ({ id }) => {
  const {
    getProduct: { query: getProduct, data, loading },
  } = useProductApi({
    getProduct: {
      options: {
        fetchPolicy: "cache-first",
      },
    },
  });

  useEffect(() => {
    getProduct({ variables: { id } });
  }, [getProduct, id]);

  if (loading) {
    return <FormatLoader />;
  }

  const name = get(data, "getProduct.name", "");

  return <span>{name}</span>;
};

import React, { useEffect } from "react";
import get from "lodash/get";
import { FormatLoader } from "..";
import { useSupplierApi } from "../../api";

interface SupplierFormatterProps {
  /** The id of the supplier record */
  id: string;
}

/** Returns the supplier name inside of an unstyled span tag */
export const SupplierFormatter: React.FC<SupplierFormatterProps> = ({ id }) => {
  const {
    getSupplier: { query: getSupplier, data, loading },
  } = useSupplierApi();

  useEffect(() => {
    getSupplier({ variables: { id } });
  }, []);

  const name = get(data, "getSupplier.name", "");

  if (loading) {
    return <FormatLoader />;
  }

  return <span>{name}</span>;
};

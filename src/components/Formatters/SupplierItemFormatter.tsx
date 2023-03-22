import get from "lodash/get";
import React, { useEffect } from "react";
import { useSupplierItemApi } from "../../api";
import { FormatLoader } from "../";

interface SupplierItemFormatterProps {
  id: string;
  showPartNumber?: boolean;
  showMaterialName?: boolean;
  showVendorName?: boolean;
}

export const SupplierItemFormatter: React.FC<SupplierItemFormatterProps> = ({
  id,
  showPartNumber = false,
  showMaterialName = true,
  showVendorName = false,
}) => {
  const {
    getSupplierItem: { query: getSupplierItem, data, loading },
  } = useSupplierItemApi();

  useEffect(() => {
    getSupplierItem({ variables: { id } });
  }, [getSupplierItem, id]);

  if (loading) {
    return <FormatLoader />;
  }

  const supplierItem = get(data, "getSupplierItem");

  const content = (
    <>
      {showVendorName && <span>{supplierItem?.supplier?.name}</span>}
      {showPartNumber && <span>{supplierItem?.item?.partNumber}</span>}
      {showMaterialName && <span>{supplierItem?.item?.name}</span>}
    </>
  );

  return <>{content}</>;
};

import React, { useEffect } from "react";
import { useDeviceApi } from "../../api";
import { FormatLoader } from "../";

interface DeviceFormatterProps {
  /** The id of the device record */
  id: string;
}

/** Returns the device name inside of an unstyled span tag */
export const DeviceFormatter: React.FC<DeviceFormatterProps> = ({ id }) => {
  const {
    getDevice: { query: getDevice, loading, data },
  } = useDeviceApi();

  useEffect(() => {
    getDevice({ variables: { id } });
  }, [getDevice, id]);

  if (loading) {
    return <FormatLoader />;
  }

  const name = data?.getDevice?.name || "-";

  return <span>{name}</span>;
};

import { useCompanyApi } from "./company/api";
import { useCompanyUserApi } from "./companyUser/api";
import { useDepartureApi } from "./departure/api";
import { useDeviceApi } from "./device/api";
import { useFacilityApi } from "./facility/api";
import { useInventoryRecordApi } from "./inventoryRecord/api";
import { useItemApi } from "./item/api";
import { useFacilityItemApi } from "./facilityItem/api";
import { useOperatorApi } from "./operator/api";
import { useProductApi } from "./product/api";
import { useArrivalApi } from "./arrival/api";
import {
  useDynamicContainerApi,
  useItemStorageInventoryAreaLocationApi,
  useItemStorageInventoryAreaRuleApi,
  useStorageInventoryAreaLocationApi,
  useStorageInventoryApi,
  useStorageInventoryAreaRuleApi,
} from "./storage/index";
import { useKitApi } from "./kit/api";
import { useInventoryAreaApi } from "./inventoryArea/api";
import { useTeamApi } from "./team/api";
import { useSupplierApi } from "./supplier/api";
import { useSupplierItemApi } from "./supplierItem/api";
import { useEventApi } from "./event/api";
import { useInstructionApi } from "./instruction/api";
import { useKioskApi } from "./kiosk/api";
import { useAppApi } from "./app/api";
import { useItemGroupApi } from "./itemGroup/api";
import { useBidApi } from "./bid/api";

export { useAppApi } from "./app/api";
export { useArrivalApi } from "./arrival/api";
export { useBidApi } from "./bid/api";
export { useCompanyApi } from "./company/api";
export { useCompanyUserApi } from "./companyUser/api";
export { useDepartureApi } from "./departure/api";
export { useDeviceApi } from "./device/api";
export { useEventApi } from "./event/api";
export { useFacilityApi } from "./facility/api";
export { useFacilityItemApi } from "./facilityItem/api";
export { useInstructionApi } from "./instruction/api";
export { useInventoryAreaApi } from "./inventoryArea/api";
export { useInventoryRecordApi } from "./inventoryRecord/api";
export { useItemApi } from "./item/api";
export { useItemGroupApi } from "./itemGroup/api";
export { useKioskApi } from "./kiosk/api";
export { useKitApi } from "./kit/api";
export { useOperatorApi } from "./operator/api";
export { useProductApi } from "./product/api";
export {
  useDynamicContainerApi,
  useItemStorageInventoryAreaLocationApi,
  useItemStorageInventoryAreaRuleApi,
  useStorageInventoryApi,
  useStorageInventoryAreaLocationApi,
  useStorageInventoryAreaRuleApi,
} from "./storage/index";
export { useSupplierApi } from "./supplier/api";
export { useSupplierItemApi } from "./supplierItem/api";
export { useTeamApi } from "./team/api";
export { useFilesApi } from "./files/api";

export const useApi = () => {
  const appApi = useAppApi();
  const arrivalApi = useArrivalApi();
  const bidApi = useBidApi();
  const companyApi = useCompanyApi();
  const companyUserApi = useCompanyUserApi();
  const departureApi = useDepartureApi();
  const deviceApi = useDeviceApi();
  const dynamicContainerApi = useDynamicContainerApi();
  const eventApi = useEventApi();
  const facilityApi = useFacilityApi();
  const facilityItemApi = useFacilityItemApi();
  const instructionApi = useInstructionApi();
  const inventoryAreaApi = useInventoryAreaApi();
  const inventoryRecordApi = useInventoryRecordApi();
  const itemApi = useItemApi();
  const itemGroupApi = useItemGroupApi();
  const itemStorageInventoryAreaLocationApi =
    useItemStorageInventoryAreaLocationApi();
  const itemStorageInventoryAreaRuleApi = useItemStorageInventoryAreaRuleApi();
  const kioskApi = useKioskApi();
  const kitApi = useKitApi();
  const operatorApi = useOperatorApi();
  const productApi = useProductApi();
  const storageInventoryApi = useStorageInventoryApi();
  const storageInventoryAreaLocationApi = useStorageInventoryAreaLocationApi();
  const storageInventoryAreaRuleApi = useStorageInventoryAreaRuleApi();
  const supplierApi = useSupplierApi();
  const supplierItemApi = useSupplierItemApi();
  const teamApi = useTeamApi();

  return {
    app: appApi,
    arrival: arrivalApi,
    bid: bidApi,
    company: companyApi,
    companyUser: companyUserApi,
    departure: departureApi,
    device: deviceApi,
    dynamicContainer: dynamicContainerApi,
    event: eventApi,
    facility: facilityApi,
    inventoryArea: inventoryAreaApi,
    inventoryRecord: inventoryRecordApi,
    item: itemApi,
    itemGroup: itemGroupApi,
    facilityItem: facilityItemApi,
    itemStorageInventoryAreaLocation: itemStorageInventoryAreaLocationApi,
    itemStorageInventoryAreaRule: itemStorageInventoryAreaRuleApi,
    kiosk: kioskApi,
    kit: kitApi,
    instruction: instructionApi,
    operator: operatorApi,
    product: productApi,
    storageInventory: storageInventoryApi,
    storageInventoryAreaLocation: storageInventoryAreaLocationApi,
    storageInventoryAreaRule: storageInventoryAreaRuleApi,
    supplier: supplierApi,
    supplierItem: supplierItemApi,
    team: teamApi,
  };
};

import * as JeenyTypes from "./graphql";
import { OmitRecursively } from "./helpers";

export type SingleQueryInputs = AppSingleQueryArgs &
  ArrivalSingleQueryArgs &
  BidSingleQueryArgs &
  CompanySingleQueryArgs &
  CompanyUserSingleQueryArgs &
  DepartureSingleQueryArgs &
  DeviceSingleQueryArgs &
  DynamicContainerSingleQueryArgs &
  EventSingleQueryArgs &
  FacilitySingleQueryArgs &
  FacilityItemSingleQueryArgs &
  InstructionSingleQueryArgs &
  InventoryAreaSingleQueryArgs &
  ItemSingleQueryArgs &
  ItemGroupSingleQueryArgs &
  ItemStorageInventoryAreaLocationSingleQueryArgs &
  ItemStorageInventoryAreaRuleSingleQueryArgs &
  KioskSingleQueryArgs &
  KitSingleQueryArgs &
  OperatorSingleQueryArgs &
  ProductSingleQueryArgs &
  StorageInventorySingleQueryArgs &
  StorageInventoryAreaLocationSingleQueryArgs &
  StorageInventoryAreaRuleSingleQueryArgs &
  SupplierSingleQueryArgs &
  SupplierItemSingleQueryArgs &
  TeamSingleQueryArgs;

export type ListQueryInputs = AppListQueryArgs &
  ArrivalListQueryArgs &
  BidListQueryArgs &
  CompanyUserListQueryArgs &
  DepartureListQueryArgs &
  DeviceListQueryArgs &
  DynamicContainerListQueryArgs &
  EventListQueryArgs &
  FacilityListQueryArgs &
  FacilityItemListQueryArgs &
  InstructionListQueryArgs &
  InventoryRecordListQueryArgs &
  ItemListQueryArgs &
  ItemGroupListQueryArgs &
  ItemStorageInventoryAreaRuleListQueryArgs &
  KioskListQueryArgs &
  KitListQueryArgs &
  OperatorListQueryArgs &
  ProductListQueryArgs &
  StorageInventoryAreaLocationListQueryArgs &
  StorageInventoryAreaRuleListQueryArgs &
  SupplierListQueryArgs &
  SupplierItemListQueryArgs &
  TeamListQueryArgs;

// had to remove app, itemGroup queries because of it's unique return type
export type TableListQueryInputs = ArrivalListQueryArgs &
  BidListQueryArgs &
  CompanyUserListQueryArgs &
  DepartureListQueryArgs &
  DeviceListQueryArgs &
  DynamicContainerListQueryArgs &
  EventListQueryArgs &
  FacilityListQueryArgs &
  FacilityItemListQueryArgs &
  InstructionListQueryArgs &
  InventoryRecordListQueryArgs &
  ItemListQueryArgs &
  ItemStorageInventoryAreaRuleListQueryArgs &
  KioskListQueryArgs &
  KitListQueryArgs &
  OperatorListQueryArgs &
  ProductListQueryArgs &
  StorageInventoryAreaLocationListQueryArgs &
  StorageInventoryAreaRuleListQueryArgs &
  SupplierListQueryArgs &
  SupplierItemListQueryArgs &
  TeamListQueryArgs;

export type QueryInputs = SingleQueryInputs & ListQueryInputs;

export type JeenyQueries = keyof QueryInputs;
export type JeenySingleQueries = keyof SingleQueryInputs;
export type JeenyListQueries = keyof ListQueryInputs;

export type AppSingleQueryArgs = {
  "app.get": JeenyTypes.QueryGetCustomAppArgs;
};

export type AppListQueryArgs = {
  "app.getApps": JeenyTypes.QueryGetCustomAppArgs;
};

export type ArrivalSingleQueryArgs = {
  "arrival.getArrivalDetails": JeenyTypes.QueryGetArrivalDetailsArgs;
};

export type ArrivalListQueryArgs = {
  "arrival.getArrivals": JeenyTypes.QueryGetArrivalsArgs;
  "arrival.getArrivalsByItem": JeenyTypes.QueryGetArrivalsByItemArgs;
  "arrival.getArrivalsBySupplier": JeenyTypes.QueryGetArrivalsBySupplierArgs;
  "arrival.getArrivalReleases": JeenyTypes.QueryGetArrivalReleasesArgs;
  "arrival.getArrivalReleasesWithStatus": JeenyTypes.QueryGetArrivalReleasesWithStatusArgs;
  "arrival.getArrivalReleasesByItem": JeenyTypes.QueryGetArrivalsByItemArgs;
  "arrival.getArrivalReleasesBySupplier": JeenyTypes.QueryGetArrivalReleasesBySupplierArgs;
};

export type BidSingleQueryArgs = {
  "bid.getBidRequestDetails": JeenyTypes.QueryGetBidRequestDetailsArgs;
};

export type BidListQueryArgs = {
  "bid.getBidRequests": JeenyTypes.QueryGetBidRequestsArgs;
  "bid.getBidLineItemsByItem": JeenyTypes.QueryGetBidLineItemsByItemArgs;
  "bid.getBidLineItemsBySupplier": JeenyTypes.QueryGetBidLineItemsBySupplierArgs;
  "bid.getBidLineItemsByItemGroup": JeenyTypes.QueryGetBidLineItemsByItemGroupArgs;
  "bid.getBidsBySupplier": JeenyTypes.QueryGetBidsBySupplierArgs;
  "bid.getBidRequestLineItemsByItem": JeenyTypes.QueryGetBidRequestLineItemsByItemArgs;
};

export type CompanySingleQueryArgs = {
  "company.getCompany": {};
};

export type CompanyUserSingleQueryArgs = {
  "companyUser.getCompanyUser": {};
  "companyUser.getCompanyUserAdmin": JeenyTypes.QueryGetCompanyUserAdminArgs;
};

export type CompanyUserListQueryArgs = {
  "companyUser.getCompanyUsers": JeenyTypes.QueryGetCompanyUsersArgs;
  "companyUser.getCompanyUsersByTeamId": JeenyTypes.QueryGetCompanyUsersByTeamIdArgs;
};

export type DepartureSingleQueryArgs = {
  "departure.getDeparture": JeenyTypes.QueryGetDepartureArgs;
  "departure.getDepartureDetails": JeenyTypes.QueryGetDepartureDetailsArgs;
};

export type DepartureListQueryArgs = {
  "departure.getDepartures": {};
  "departure.getDeparturesByExternalCustomerId": JeenyTypes.QueryGetDeparturesByExternalCustomerIdArgs;
  "departure.getDepartureLineItemsByItemId": JeenyTypes.QueryGetDepartureLineItemsByItemIdArgs;
  "departure.getDeparturePickLists": JeenyTypes.QueryGetDeparturePickListsArgs;
  "departure.getDeparturePickListsByFacilityId": JeenyTypes.QueryGetDeparturePickListsByFacilityIdArgs;
  "departure.getDeparturePickListLineItemsByItemId": JeenyTypes.QueryGetDeparturePickListLineItemsByItemIdArgs;
};

export type DeviceSingleQueryArgs = {
  "device.getDevice": JeenyTypes.QueryGetDeviceArgs;
};

export type DeviceListQueryArgs = {
  "device.getDevices": JeenyTypes.QueryGetDevicesArgs;
};

export type DynamicContainerSingleQueryArgs = {
  "dynamicContainer.getDynamicContainer": JeenyTypes.QueryGetDynamicContainerArgs;
};

export type DynamicContainerListQueryArgs = {
  "dynamicContainer.getDynamicContainers": JeenyTypes.QueryGetDynamicContainersArgs;
  "dynamicContainer.getDynamicContainersByExpiry": JeenyTypes.QueryGetDynamicContainersByExpiryArgs;
};

export type EventSingleQueryArgs = {
  "event.getEvent": JeenyTypes.QueryGetEventArgs;
};

export type EventListQueryArgs = {
  "event.getEvents": JeenyTypes.QueryGetEventsArgs;
  "event.getEventsByAssigneeId": JeenyTypes.QueryGetEventsByAssigneeArgs;
};

export type FacilitySingleQueryArgs = {
  "facility.getFacility": JeenyTypes.QueryGetFacilityArgs;
};

export type FacilityListQueryArgs = {
  "facility.getFacilities": JeenyTypes.QueryGetFacilitiesArgs;
};

export type FacilityItemSingleQueryArgs = {
  "facilityItem.getFacilityItem": JeenyTypes.QueryGetFacilityItemArgs;
};

export type FacilityItemListQueryArgs = {
  "facilityItem.getFacilityItemsByFacility": JeenyTypes.QueryGetFacilityItemsByFacilityArgs;
  "facilityItem.getFacilityItemsByItem": JeenyTypes.QueryGetFacilityItemsByFacilityArgs;
};

export type InstructionSingleQueryArgs = {
  "instruction.getInstructionTemplate": JeenyTypes.QueryGetInstructionTemplateArgs;
  "instruction.getInstructionTemplateDetails": JeenyTypes.QueryGetInstructionTemplateDetailsArgs;
  "instruction.getInstructionExecutionDetails": JeenyTypes.QueryGetInstructionExecutionDetailsArgs;
};

export type InstructionListQueryArgs = {
  "instruction.getInstructionTemplates": {};
  "instruction.getInstructionExecutionsByExecutorId": JeenyTypes.QueryGetInstructionExecutionsByExecutorIdArgs;
  "instruction.getInstructionExecutionsByEventId": JeenyTypes.QueryGetInstructionExecutionsByEventIdArgs;
  "instruction.getInstructionExecutionsByTrigger": JeenyTypes.QueryGetInstructionExecutionsByTriggerArgs;
  "instruction.getInstructionExecutionsByInstructionTemplateId": JeenyTypes.QueryGetInstructionExecutionsByInstructionTemplateIdArgs;
  "instruction.getInstructionSubjectsBySubject": JeenyTypes.QueryGetInstructionSubjectsBySubjectArgs;
  "instruction.getInstructionSubjectsByTemplate": JeenyTypes.QueryGetInstructionSubjectsByTemplateArgs;
};

export type InventoryAreaSingleQueryArgs = {
  "inventoryArea.getInventoryArea": JeenyTypes.QueryGetInventoryAreaArgs;
};

export type InventoryRecordListQueryArgs = {
  "inventoryRecord.getInventoryLogs": JeenyTypes.QueryGetInventoryLogsArgs;
};

export type ItemSingleQueryArgs = {
  "item.getItem": JeenyTypes.QueryGetItemArgs;
  "item.getItemDetails": JeenyTypes.QueryGetItemDetailsArgs;
};

export type ItemListQueryArgs = {
  "item.getItems": JeenyTypes.QueryGetItemsArgs;
  "item.getItemsWithPrimarySupplier": JeenyTypes.QueryGetItemsWithPrimarySupplierArgs;
};

export type ItemGroupSingleQueryArgs = {
  "itemGroup.getItemGroupDetails": JeenyTypes.QueryGetItemGroupDetailsArgs;
};

export type ItemGroupListQueryArgs = {
  "itemGroup.getItemGroupsWithItems": {};
};

export type ItemStorageInventoryAreaLocationSingleQueryArgs = {
  "itemStorageInventoryAreaLocation.getItemStorageInventoryAreaLocation": JeenyTypes.QueryGetItemStorageInventoryAreaLocationArgs;
};

export type ItemStorageInventoryAreaRuleSingleQueryArgs = {
  "itemStorageInventoryAreaRule.getItemStorageInventoryAreaRule": JeenyTypes.QueryGetItemStorageInventoryAreaRuleArgs;
};

export type ItemStorageInventoryAreaRuleListQueryArgs = {
  "itemStorageInventoryAreaRule.getItemStorageInventoryAreaRules": JeenyTypes.QueryGetItemStorageInventoryAreaRulesArgs;
};

export type KioskSingleQueryArgs = {
  "kiosk.getKiosk": JeenyTypes.QueryGetKioskArgs;
};

export type KioskListQueryArgs = {
  "kiosk.getKiosks": JeenyTypes.QueryGetKiosksArgs;
};

export type KitSingleQueryArgs = {
  "kit.getKitTemplateTree": JeenyTypes.QueryGetKitTemplateTreeArgs;
  "kit.getKitTemplateBom": JeenyTypes.QueryGetKitTemplateBomArgs;
  "kit.getKitTemplateDetails": JeenyTypes.QueryGetKitTemplateDetailsArgs;
};

export type KitListQueryArgs = {
  "kit.getKitTemplates": JeenyTypes.QueryGetKitTemplatesArgs;
};

export type OperatorSingleQueryArgs = {
  "operator.getOperator": JeenyTypes.QueryGetOperatorArgs;
};

export type OperatorListQueryArgs = {
  "operator.getOperators": JeenyTypes.QueryGetOperatorsArgs;
  "operator.getOperatorsByDevice": JeenyTypes.QueryGetOperatorsByDeviceArgs;
  "operator.getOperatorsByTeamId": JeenyTypes.QueryGetOperatorsByTeamIdArgs;
};

export type ProductSingleQueryArgs = {
  "product.getProduct": JeenyTypes.QueryGetProductArgs;
};

export type ProductListQueryArgs = {
  "product.getProducts": {};
};

export type StorageInventorySingleQueryArgs = {
  "storageInventory.getStorageInventoryByLocation": JeenyTypes.QueryGetStorageInventoryByLocationArgs;
  "storageInventory.getStorageInventoryByPayload": JeenyTypes.QueryGetStorageInventoryByPayloadArgs;
};

export type StorageInventoryAreaLocationSingleQueryArgs = {
  "storageInventoryAreaLocation.getStorageInventoryAreaLocation": JeenyTypes.QueryGetStorageInventoryAreaLocationArgs;
};

export type StorageInventoryAreaLocationListQueryArgs = {
  "storageInventoryAreaLocation.getStorageInventoryAreaLocationsPayload": JeenyTypes.QueryGetStorageInventoryAreaLocationsPayloadArgs;
  "storageInventoryAreaLocation.getStorageInventoryAreaLocations": JeenyTypes.QueryGetStorageInventoryAreaLocationsArgs;
};

export type StorageInventoryAreaRuleSingleQueryArgs = {
  "storageInventoryAreaRule.getStorageInventoryAreaRule": JeenyTypes.QueryGetStorageInventoryAreaRuleArgs;
};

export type StorageInventoryAreaRuleListQueryArgs = {
  "storageInventoryAreaRule.getStorageInventoryAreaRules": JeenyTypes.QueryGetStorageInventoryAreaRulesArgs;
};

export type SupplierSingleQueryArgs = {
  "supplier.getSupplier": JeenyTypes.QueryGetSupplierArgs;
};

export type SupplierListQueryArgs = {
  "supplier.getSuppliers": JeenyTypes.QueryGetSuppliersArgs;
};

export type SupplierItemSingleQueryArgs = {
  "supplierItem.getSupplierItem": JeenyTypes.QueryGetSupplierItemArgs;
};

export type SupplierItemListQueryArgs = {
  "supplierItem.getSupplierItemsByItem": JeenyTypes.QueryGetSupplierItemsByItemArgs;
  "supplierItem.getSupplierItemsBySupplier": JeenyTypes.QueryGetSupplierItemsBySupplierArgs;
};

export type TeamSingleQueryArgs = {
  "team.getTeam": JeenyTypes.QueryGetTeamArgs;
  "team.getTeamDetails": JeenyTypes.QueryGetTeamDetailsArgs;
};

export type TeamListQueryArgs = {
  "team.getTeams": JeenyTypes.QueryGetTeamsArgs;
};

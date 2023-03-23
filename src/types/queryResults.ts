import * as JeenyTypes from "./graphql";
import { OmitRecursively } from "../types/helpers";

export type QueryResultTypes = AppQueryResultTypes &
  ArrivalQueryResultTypes &
  BidQueryResultTypes &
  CompanyQueryResultTypes &
  CompanyUserQueryResultTypes &
  DepartureQueryResultTypes &
  DeviceQueryResultTypes &
  DynamicContainerQueryResultTypes &
  EventQueryResultTypes &
  FacilityQueryResultTypes &
  FacilityItemQueryResultTypes &
  InstructionQueryResultTypes &
  InventoryAreaQueryResultTypes &
  InventoryRecordQueryResultTypes &
  ItemQueryResultTypes &
  ItemGroupQueryResultTypes &
  ItemStorageInventoryAreaLocationQueryResultTypes &
  ItemStorageInventoryAreaRuleQueryResultTypes &
  KioskQueryResultTypes &
  KitQueryResultTypes &
  OperatorQueryResultTypes &
  ProductQueryResultTypes &
  StorageInventoryQueryResultTypes &
  StorageInventoryAreaLocationQueryResultTypes &
  StorageInventoryAreaRuleQueryResultTypes &
  SupplierQueryResultTypes &
  SupplierItemQueryResultTypes &
  TeamQueryResultTypes;

export type JeenyQueryResults = keyof QueryResultTypes;

export type AppQueryResultTypes = {
  "app.getInstalledOfficialApp": JeenyTypes.InstalledApp;
  "app.getCustomApp": JeenyTypes.App;
  "app.getApps": JeenyTypes.App;
};

export type ArrivalQueryResultTypes = {
  "arrival.getArrivalDetails": JeenyTypes.ArrivalDetailsWithStatus;
  "arrival.getArrivals": JeenyTypes.Arrival;
  "arrival.getArrivalsByItem": JeenyTypes.Arrival;
  "arrival.getArrivalsBySupplier": JeenyTypes.Arrival;
  "arrival.getArrivalReleases": JeenyTypes.ArrivalRelease;
  "arrival.getArrivalReleasesWithStatus": JeenyTypes.ArrivalRelease;
  "arrival.getArrivalReleasesByItem": JeenyTypes.ArrivalRelease;
  "arrival.getArrivalReleasesBySupplier": JeenyTypes.ArrivalRelease;
};

export type BidQueryResultTypes = {
  "bid.getBidRequests": JeenyTypes.BidRequest;
  "bid.getBidRequestDetails": JeenyTypes.BidRequestDetails;
  "bid.getBidLineItemsByItem": JeenyTypes.BidLineItem;
  "bid.getBidLineItemsBySupplier": JeenyTypes.BidLineItem;
  "bid.getBidLineItemsByItemGroup": JeenyTypes.BidLineItem;
  "bid.getBidsBySupplier": JeenyTypes.Bid;
  "bid.getBidRequestLineItemsByItem": JeenyTypes.BidRequestLineItem;
};

export type CompanyQueryResultTypes = {
  "company.getCompany": JeenyTypes.Company;
};

export type CompanyUserQueryResultTypes = {
  "companyUser.getCompanyUser": JeenyTypes.CompanyUser;
  "companyUser.getCompanyUserAdmin": JeenyTypes.CompanyUser;
  "companyUser.getCompanyUsers": JeenyTypes.CompanyUser;
  "companyUser.getCompanyUsersByTeamId": JeenyTypes.CompanyUser;
};

export type DeviceQueryResultTypes = {
  "device.getDevice": JeenyTypes.Device;
  "device.getDevices": JeenyTypes.Device;
};

export type DepartureQueryResultTypes = {
  "departure.getDeparture": JeenyTypes.Departure;
  "departure.getDepartureDetails": JeenyTypes.DepartureDetails;
  "departure.getDepartures": JeenyTypes.Departure;
  "departure.getDeparturesByExternalCustomerId": JeenyTypes.Departure;
  "departure.getDepartureLineItemsByItemId": JeenyTypes.DepartureLineItem;
  "departure.getDeparturePickLists": JeenyTypes.DeparturePickList;
  "departure.getDeparturePickListsByFacilityId": JeenyTypes.DeparturePickList;
  "departure.getDeparturePickListLineItemsByItemId": JeenyTypes.DeparturePickList;
};

export type EventQueryResultTypes = {
  "event.getEvent": JeenyTypes.Event;
  "event.getEvents": JeenyTypes.Event;
  "event.getEventsByAssigneeId": JeenyTypes.Event;
};

export type FacilityQueryResultTypes = {
  "facility.getFacility": JeenyTypes.Facility;
  "facility.getFacilities": JeenyTypes.Facility;
};

export type FacilityItemQueryResultTypes = {
  "facilityItem.getFacilityItem": JeenyTypes.FacilityItem;
  "facilityItem.getFacilityItemsByFacility": JeenyTypes.FacilityItem;
  "facilityItem.getFacilityItemsByItem": JeenyTypes.FacilityItem;
};

export type InstructionQueryResultTypes = {
  "instruction.getInstructionTemplate": JeenyTypes.InstructionTemplate;
  "instruction.getInstructionTemplates": JeenyTypes.InstructionTemplate;
  "instruction.getInstructionTemplateDetails": JeenyTypes.InstructionTemplateDetails;
  "instruction.getInstructionExecutionDetails": JeenyTypes.InstructionExecutionDetails;
  "instruction.getInstructionExecutionsByExecutorId": JeenyTypes.InstructionExecution;
  "instruction.getInstructionExecutionsByEventId": JeenyTypes.InstructionExecution;
  "instruction.getInstructionExecutionsByTrigger": JeenyTypes.InstructionExecution;
  "instruction.getInstructionExecutionsByInstructionTemplateId": JeenyTypes.InstructionExecution;
  "instruction.getInstructionSubjectsBySubject": JeenyTypes.InstructionSubject;
  "instruction.getInstructionSubjectsByTemplate": JeenyTypes.InstructionSubject;
};

export type InventoryAreaQueryResultTypes = {
  "inventoryArea.getInventoryArea": JeenyTypes.StorageInventoryArea;
};

export type InventoryRecordQueryResultTypes = {
  "inventoryRecord.getInventoryLogs": JeenyTypes.InventoryLog;
};

export type ItemQueryResultTypes = {
  "item.getItem": JeenyTypes.Item;
  "item.getItemDetails": JeenyTypes.ItemDetails;
  "item.getItems": OmitRecursively<JeenyTypes.Item, "groupItems">;
  "item.getItemsWithPrimarySupplier": OmitRecursively<
    JeenyTypes.Item,
    "groupItems"
  >;
};

export type ItemGroupQueryResultTypes = {
  "itemGroup.getItemGroupDetails": JeenyTypes.ItemGroupDetails;
  "itemGroup.getItemGroupsWithItems": JeenyTypes.ItemGroupsWithItems;
};

export type KioskQueryResultTypes = {
  "kiosk.getKiosk": JeenyTypes.Kiosk;
  "kiosk.getKiosks": JeenyTypes.Kiosk;
};
export type KitQueryResultTypes = {
  "kit.getKitTemplateDetails": JeenyTypes.KitTemplateDetails;
  "kit.getKitTemplateTree": JeenyTypes.KitTemplateTree;
  "kit.getKitTemplateBom": JeenyTypes.KitTemplateBomEntry;
  "kit.getKitTemplates": JeenyTypes.KitTemplate;
};

export type OperatorQueryResultTypes = {
  "operator.getOperator": JeenyTypes.SafeOperator;
  "operator.getOperators": JeenyTypes.SafeOperator;
  "operator.getOperatorsByDevice": JeenyTypes.SafeOperator;
  "operator.getOperatorsByTeamId": JeenyTypes.SafeOperator;
};

export type ProductQueryResultTypes = {
  "product.getProduct": JeenyTypes.Product;
  "product.getProducts": JeenyTypes.Product;
};

export type DynamicContainerQueryResultTypes = {
  "dynamicContainer.getDynamicContainer": JeenyTypes.DynamicContainer;
  "dynamicContainer.getDynamicContainers": JeenyTypes.DynamicContainer;
  "dynamicContainer.getDynamicContainersByExpiry": JeenyTypes.DynamicContainer;
};

export type ItemStorageInventoryAreaLocationQueryResultTypes = {
  "itemStorageInventoryAreaLocation.getItemStorageInventoryAreaLocation": JeenyTypes.ItemStorageInventoryAreaLocation;
};

export type ItemStorageInventoryAreaRuleQueryResultTypes = {
  "itemStorageInventoryAreaRule.getItemStorageInventoryAreaRule": JeenyTypes.ItemStorageInventoryAreaRule;
  "itemStorageInventoryAreaRule.getItemStorageInventoryAreaRules": JeenyTypes.ItemStorageInventoryAreaRule;
};

export type StorageInventoryQueryResultTypes = {
  "storageInventory.getStorageInventoryByLocation": JeenyTypes.StorageInventory;
  "storageInventory.getStorageInventoryByPayload": JeenyTypes.StorageInventory;
};

export type StorageInventoryAreaLocationQueryResultTypes = {
  "storageInventoryAreaLocation.getStorageInventoryAreaLocation": JeenyTypes.StorageInventoryAreaLocation;
  "storageInventoryAreaLocation.getStorageInventoryAreaLocationsPayload": JeenyTypes.StorageInventoryAreaLocationPayload;
  "storageInventoryAreaLocation.getStorageInventoryAreaLocations": JeenyTypes.StorageInventoryAreaLocation;
};

export type StorageInventoryAreaRuleQueryResultTypes = {
  "storageInventoryAreaRule.getStorageInventoryAreaRule": JeenyTypes.StorageInventoryAreaRule;
  "storageInventoryAreaRule.getStorageInventoryAreaRules": JeenyTypes.StorageInventoryAreaRule;
};

export type SupplierQueryResultTypes = {
  "supplier.getSupplier": JeenyTypes.Supplier;
  "supplier.getSuppliers": JeenyTypes.Supplier;
};

export type SupplierItemQueryResultTypes = {
  "supplierItem.getSupplierItem": JeenyTypes.SupplierItem;
  "supplierItem.getSupplierItemsByItem": Omit<JeenyTypes.SupplierItem, "item">;
  "supplierItem.getSupplierItemsBySupplier": OmitRecursively<
    JeenyTypes.SupplierItem,
    "groupItems" | "supplier"
  >;
};

export type TeamQueryResultTypes = {
  "team.getTeam": JeenyTypes.Team;
  "team.getTeams": JeenyTypes.Team;
  "team.getTeamDetails": JeenyTypes.TeamDetails;
};

import * as JeenyTypes from "./graphql";

export type ActionResults = AppActionResults &
  ArrivalActionResults &
  BidActionResults &
  CompanyActionResults &
  DeviceActionResults &
  DynamicContainerActionResults &
  EventActionResults &
  FacilityActionResults &
  FacilityItemActionResults &
  InstructionActionResults &
  InventoryAreaActionResults &
  InventoryRecordActionResults &
  ItemActionResults &
  ItemGroupActionResults &
  ItemStorageInventoryAreaLocationActionResults &
  ItemStorageInventoryAreaRuleActionResults &
  ItemStorageInventoryAreaLocationActionResults &
  KitActionResults &
  ProductActionResults &
  StorageInventoryAreaLocationActionResults &
  StorageInventoryAreaRuleActionResults &
  SupplierActionResults &
  SupplierItemActionResults &
  TeamActionResults;

export type JeenyActions = keyof ActionResults;

export type AppActionResults = {
  "app.createCustomApp": JeenyTypes.App;
  "app.saveCustomApp": JeenyTypes.App;
};

export type ArrivalActionResults = {
  "arrival.createArrival": JeenyTypes.Arrival;
  "arrival.saveArrival": JeenyTypes.Arrival;
  "arrival.createArrivalRelease": JeenyTypes.ArrivalRelease;
  "arrival.saveArrivalRelease": JeenyTypes.ArrivalRelease;
  "arrival.deleteArrivalRelease": JeenyTypes.ArrivalRelease;
  "arrival.createArrivalDelivery": JeenyTypes.ArrivalDelivery;
  "arrival.saveArrivalDelivery": JeenyTypes.ArrivalDelivery;
  "arrival.deleteArrivalDelivery": JeenyTypes.ArrivalDelivery;
  "arrival.createArrivalLineItem": JeenyTypes.ArrivalLineItem;
  "arrival.saveArrivalLineItem": JeenyTypes.ArrivalLineItem;
  "arrival.deleteArrivalLineItem": JeenyTypes.ArrivalLineItem;
  "arrival.createArrivalReleaseLineItem": JeenyTypes.ArrivalReleaseLineItem;
  "arrival.saveArrivalReleaseLineItem": JeenyTypes.ArrivalReleaseLineItem;
  "arrival.deleteArrivalReleaseLineItem": JeenyTypes.ArrivalReleaseLineItem;
  "arrival.createArrivalDeliveryLineItem": JeenyTypes.ArrivalDeliveryLineItem;
  "arrival.saveArrivalDeliveryLineItem": JeenyTypes.ArrivalDeliveryLineItem;
};

export type BidActionResults = {
  "bid.createBidRequest": JeenyTypes.BidRequest;
  "bid.saveBidRequest": JeenyTypes.BidRequest;
  "bid.deleteBidRequest": JeenyTypes.BidRequest;
  "bid.createBidRequestLineItem": JeenyTypes.BidRequestLineItem;
  "bid.saveBidRequestLineItem": JeenyTypes.BidRequestLineItem;
  "bid.deleteBidRequestLineItem": JeenyTypes.BidRequestLineItem;
  "bid.createBid": JeenyTypes.Bid;
  "bid.saveBid": JeenyTypes.Bid;
  "bid.deleteBid": JeenyTypes.Bid;
  "bid.createBidLineItem": JeenyTypes.BidLineItem;
  "bid.saveBidLineItem": JeenyTypes.BidLineItem;
  "bid.deleteBidLineItem": JeenyTypes.BidLineItem;
};

export type CompanyActionResults = {
  "company.saveCompany": JeenyTypes.Company;
};

export type DeviceActionResults = {
  "device.deleteDevice": JeenyTypes.Device;
  "device.saveDevice": JeenyTypes.Device;
};

export type DynamicContainerActionResults = {
  "dynamicContainer.createDynamicContainer": JeenyTypes.DynamicContainer;
  "dynamicContainer.saveDynamicContainer": JeenyTypes.DynamicContainer;
  "dynamicContainer.deleteDynamicContainer": JeenyTypes.DynamicContainer;
  "dynamicContainer.adjustDynamicContainerPayloadQuantity": JeenyTypes.DynamicContainer;
  "dynamicContainer.attachDynamicContainer": JeenyTypes.DynamicContainer;
  "dynamicContainer.detachDynamicContainer": JeenyTypes.DynamicContainer;
  "dynamicContainer.loadDynamicContainer": JeenyTypes.DynamicContainer;
  "dynamicContainer.switchDynamicContainers": JeenyTypes.DynamicContainer;
};

export type EventActionResults = {
  "event.createEvent": JeenyTypes.Event;
  "event.saveEvent": JeenyTypes.Event;
  "event.deleteEvent": JeenyTypes.Event;
};

export type FacilityActionResults = {
  "facility.createFacility": JeenyTypes.Facility;
  "facility.saveFacility": JeenyTypes.Facility;
};

export type FacilityItemActionResults = {
  "facilityItem.createFacilityItem": JeenyTypes.FacilityItem;
  "facilityItem.saveFacilityItem": JeenyTypes.FacilityItem;
};

export type InstructionActionResults = {
  "instruction.createInstructionTemplate": JeenyTypes.InstructionTemplate;
  "instruction.saveInstructionTemplate": JeenyTypes.InstructionTemplate;
  "instruction.addInstructionTemplateStepToInstructionTemplate": JeenyTypes.InstructionTemplateStep;
  "instruction.saveInstructionTemplateStep": JeenyTypes.InstructionTemplateStep;
  "instruction.deleteInstructionTemplateStepFromInstructionTemplate": JeenyTypes.InstructionTemplateStep;
  "instruction.executeInstructionTemplate": JeenyTypes.InstructionExecution;
  "instruction.saveInstructionExecution": JeenyTypes.InstructionExecution;
  "instruction.submitInstructionExecutionStep": JeenyTypes.InstructionExecutionStepSubmission;
  "instruction.createInstructionSubject": JeenyTypes.InstructionSubject;
  "instruction.saveInstructionSubject": JeenyTypes.InstructionSubject;
  "instruction.deleteInstructionSubject": JeenyTypes.InstructionSubject;
};

export type InventoryAreaActionResults = {
  "inventoryArea.createInventoryArea": JeenyTypes.StorageInventoryArea;
  "inventoryArea.saveInventoryArea": JeenyTypes.StorageInventoryArea;
  "inventoryArea.deleteInventoryArea": JeenyTypes.StorageInventoryArea;
};

export type InventoryRecordActionResults = {
  "inventoryRecord.addInventoryRecord": JeenyTypes.InventoryRecord;
  "inventoryRecord.deductInventoryRecord": JeenyTypes.InventoryRecord;
};

export type ItemActionResults = {
  "item.createItem": JeenyTypes.Item;
  "item.saveItem": JeenyTypes.Item;
};

export type ItemGroupActionResults = {
  "itemGroup.createItemGroup": JeenyTypes.ItemGroup;
  "itemGroup.saveItemGroup": JeenyTypes.ItemGroup;
  "itemGroup.deleteItemGroup": JeenyTypes.ItemGroup;
};

export type ItemStorageInventoryAreaLocationActionResults = {
  "itemStorageInventoryAreaLocation.createItemStorageInventoryAreaLocation": JeenyTypes.ItemStorageInventoryAreaLocation;
  "itemStorageInventoryAreaLocation.saveItemStorageInventoryAreaLocation": JeenyTypes.ItemStorageInventoryAreaLocation;
  "itemStorageInventoryAreaLocation.deleteItemStorageInventoryAreaLocation": JeenyTypes.ItemStorageInventoryAreaLocation;
  "itemStorageInventoryAreaLocation.handleItemStorageInventoryAreaLocation": JeenyTypes.ItemStorageInventoryAreaLocation;
};

export type ItemStorageInventoryAreaRuleActionResults = {
  "itemStorageInventoryAreaRule.createItemStorageInventoryAreaRule": JeenyTypes.ItemStorageInventoryAreaRule;
  "itemStorageInventoryAreaRule.saveItemStorageInventoryAreaRule": JeenyTypes.ItemStorageInventoryAreaRule;
};

export type KitActionResults = {
  "kit.createKitTemplate": JeenyTypes.KitTemplate;
  "kit.saveKitTemplate": JeenyTypes.KitTemplate;
  "kit.addKitTemplatePartToKitTemplate": JeenyTypes.KitTemplatePart;
  "kit.saveKitTemplatePart": JeenyTypes.KitTemplatePart;
  "kit.addKitTemplatePartOptionToKitTemplatePart": JeenyTypes.KitTemplatePartOption;
  "kit.setDefaultKitTemplatePartOption": JeenyTypes.KitTemplatePart;
  "kit.deleteKitTemplatePartOptionFromKitTemplatePart": JeenyTypes.KitTemplatePartOption;
  "kit.deleteKitTemplatePartFromKitTemplate": JeenyTypes.KitTemplatePart;
};

export type ProductActionResults = {
  "product.createProduct": JeenyTypes.Product;
  "product.saveProduct": JeenyTypes.Product;
};

export type StorageInventoryAreaLocationActionResults = {
  "storageInventoryAreaLocation.createStorageInventoryAreaLocation": JeenyTypes.StorageInventoryAreaLocation;
  "storageInventoryAreaLocation.saveStorageInventoryAreaLocation": JeenyTypes.StorageInventoryAreaLocation;
  "storageInventoryAreaLocation.deleteStorageInventoryAreaLocation": JeenyTypes.StorageInventoryAreaLocation;
};

export type StorageInventoryAreaRuleActionResults = {
  "storageInventoryAreaRule.createStorageInventoryAreaRule": JeenyTypes.StorageInventoryAreaRule;
  "storageInventoryAreaRule.updateStorageInventoryAreaRule": JeenyTypes.StorageInventoryAreaRule;
};

export type SupplierActionResults = {
  "supplier.createSupplier": JeenyTypes.Supplier;
  "supplier.saveSupplier": JeenyTypes.Supplier;
};

export type SupplierItemActionResults = {
  "supplierItem.createSupplierItem": JeenyTypes.SupplierItem;
  "supplierItem.saveSupplierItem": JeenyTypes.SupplierItem;
};

export type TeamActionResults = {
  "team.createTeam": JeenyTypes.Team;
  "team.saveTeam": JeenyTypes.Team;
};

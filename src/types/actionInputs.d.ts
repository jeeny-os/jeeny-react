import * as JeenyTypes from "../types/graphql";

export type ActionInputs = AppActionInputs &
  ArrivalActionInputs &
  BidActionInputs &
  CompanyActionInputs &
  DeviceActionInputs &
  DynamicContainerActionInputs &
  EventActionInputs &
  FacilityActionInputs &
  FacilityItemActionInputs &
  InstructionActionInputs &
  InventoryAreaActionInputs &
  InventoryRecordActionInputs &
  ItemActionInputs &
  ItemGroupActionInputs &
  ItemStorageInventoryAreaLocationActionInputs &
  ItemStorageInventoryAreaRuleActionInputs &
  ItemStorageInventoryAreaLocationActionInputs &
  KitActionInputs &
  ProductActionInputs &
  StorageInventoryAreaLocationActionInputs &
  StorageInventoryAreaRuleActionInputs &
  SupplierActionInputs &
  SupplierItemActionInputs &
  TeamActionInputs;

export type JeenyActions = keyof ActionInputs;

export type AppActionInputs = {
  "app.createCustomApp": JeenyTypes.CustomAppInput;
  "app.saveCustomApp": JeenyTypes.CustomAppUpdateInput;
};

export type ArrivalActionInputs = {
  "arrival.createArrival": JeenyTypes.ArrivalInput;
  "arrival.saveArrival": JeenyTypes.ArrivalUpdateInput;
  "arrival.createArrivalRelease": JeenyTypes.ArrivalReleaseInput;
  "arrival.saveArrivalRelease": JeenyTypes.ArrivalReleaseUpdateInput;
  "arrival.deleteArrivalRelease": JeenyTypes.ArrivalReleaseDeleteInput;
  "arrival.createArrivalDelivery": JeenyTypes.ArrivalDeliveryInput;
  "arrival.saveArrivalDelivery": JeenyTypes.ArrivalDeliveryUpdateInput;
  "arrival.deleteArrivalDelivery": JeenyTypes.ArrivalDeliveryDeleteInput;
  "arrival.createArrivalLineItem": JeenyTypes.ArrivalLineItemInput;
  "arrival.saveArrivalLineItem": JeenyTypes.ArrivalLineItemUpdateInput;
  "arrival.deleteArrivalLineItem": JeenyTypes.ArrivalLineItemDeleteInput;
  "arrival.createArrivalReleaseLineItem": JeenyTypes.ArrivalReleaseLineItemInput;
  "arrival.saveArrivalReleaseLineItem": JeenyTypes.ArrivalReleaseLineItemUpdateInput;
  "arrival.deleteArrivalReleaseLineItem": JeenyTypes.ArrivalReleaseLineItemDeleteInput;
  "arrival.createArrivalDeliveryLineItem": JeenyTypes.ArrivalDeliveryLineItemInput;
  "arrival.saveArrivalDeliveryLineItem": JeenyTypes.ArrivalDeliveryLineItemUpdateInput;
};

export type BidActionInputs = {
  "bid.createBidRequest": JeenyTypes.BidRequestInput;
  "bid.saveBidRequest": JeenyTypes.BidRequestUpdateInput;
  "bid.deleteBidRequest": JeenyTypes.MutationDeleteBidRequestArgs;
  "bid.createBidRequestLineItem": JeenyTypes.BidRequestLineItemInput;
  "bid.saveBidRequestLineItem": JeenyTypes.MutationSaveBidRequestLineItemArgs;
  "bid.deleteBidRequestLineItem": JeenyTypes.MutationDeleteBidRequestLineItemArgs;
  "bid.createBid": JeenyTypes.BidInput;
  "bid.saveBid": JeenyTypes.MutationSaveBidArgs;
  "bid.deleteBid": JeenyTypes.MutationDeleteBidArgs;
  "bid.createBidLineItem": JeenyTypes.BidLineItemInput;
  "bid.saveBidLineItem": JeenyTypes.MutationSaveBidLineItemArgs;
  "bid.deleteBidLineItem": JeenyTypes.MutationDeleteBidLineItemArgs;
};

export type CompanyActionInputs = {
  "company.saveCompany": JeenyTypes.CompanyInputUpdate;
};

export type DeviceActionInputs = {
  "device.deleteDevice": JeenyTypes.MutationDeleteDeviceArgs;
  "device.saveDevice": JeenyTypes.DeviceUpdateInput;
};

export type DynamicContainerActionInputs = {
  "dynamicContainer.createDynamicContainer": JeenyTypes.DynamicContainerInput;
  "dynamicContainer.saveDynamicContainer": JeenyTypes.DynamicContainerUpdateInput;
  "dynamicContainer.deleteDynamicContainer": JeenyTypes.DynamicContainerDeleteInput;
  "dynamicContainer.adjustDynamicContainerPayloadQuantity": JeenyTypes.DynamicContainerAdjustPayloadQuantityInput;
  "dynamicContainer.attachDynamicContainer": JeenyTypes.DynamicContainerAttachInput;
  "dynamicContainer.detachDynamicContainer": JeenyTypes.DynamicContainerDetachInput;
  "dynamicContainer.loadDynamicContainer": JeenyTypes.DynamicContainerLoadInput;
  "dynamicContainer.switchDynamicContainers": {
    dynamicContainer1Id: string;
    dynamicContainer2Id: string;
    facilityId: string;
  };
};

export type EventActionInputs = {
  "event.createEvent": JeenyTypes.EventInput;
  "event.saveEvent": JeenyTypes.EventUpdateInput;
  "event.deleteEvent": JeenyTypes.MutationDeleteEventArgs;
};

export type FacilityActionInputs = {
  "facility.createFacility": JeenyTypes.FacilityInput;
  "facility.saveFacility": JeenyTypes.FacilityInputUpdate;
};

export type FacilityItemActionInputs = {
  "facilityItem.createFacilityItem": JeenyTypes.FacilityItemInput;
  "facilityItem.saveFacilityItem": JeenyTypes.FacilityItemUpdateInput;
};

export type InstructionActionInputs = {
  "instruction.createInstructionTemplate": JeenyTypes.InstructionTemplateInput;
  "instruction.saveInstructionTemplate": JeenyTypes.InstructionTemplateUpdateInput;
  "instruction.addInstructionTemplateStepToInstructionTemplate": JeenyTypes.AddInstructionTemplateStepToInstructionTemplateInput;
  "instruction.saveInstructionTemplateStep": JeenyTypes.UpdateInstructionTemplateStepInput;
  "instruction.deleteInstructionTemplateStepFromInstructionTemplate": JeenyTypes.DeleteInstructionTemplateStepFromInstructionTemplateInput;
  "instruction.executeInstructionTemplate": JeenyTypes.ExecuteInstructionTemplateInput;
  "instruction.saveInstructionExecution": JeenyTypes.InstructionExecutionUpdateInput;
  "instruction.submitInstructionExecutionStep": JeenyTypes.SubmitInstructionExecutionStepInput;
  "instruction.createInstructionSubject": JeenyTypes.InstructionSubjectInput;
  "instruction.saveInstructionSubject": JeenyTypes.UpdateInstructionSubjectInput;
  "instruction.deleteInstructionSubject": JeenyTypes.DeleteInstructionSubjectInput;
};

export type InventoryAreaActionInputs = {
  "inventoryArea.createInventoryArea": {
    inventoryArea: JeenyTypes.FacilityInventoryAreaInput;
    rule: JeenyTypes.InventoryAreaRuleInput;
  };
  "inventoryArea.saveInventoryArea": JeenyTypes.FacilityInventoryAreaUpdateInput;
  "inventoryArea.deleteInventoryArea": JeenyTypes.FacilityInventoryAreaDeleteInput;
};

export type InventoryRecordActionInputs = {
  "inventoryRecord.addInventoryRecord": JeenyTypes.InventoryRecordAdditionInput;
  "inventoryRecord.deductInventoryRecord": JeenyTypes.InventoryRecordDeductionInput;
};

export type ItemActionInputs = {
  "item.createItem": JeenyTypes.ItemInput;
  "item.saveItem": JeenyTypes.ItemInputUpdate;
};

export type ItemGroupActionInputs = {
  "itemGroup.createItemGroup": JeenyTypes.ItemGroupInput;
  "itemGroup.saveItemGroup": JeenyTypes.ItemGroupUpdateInput;
  "itemGroup.deleteItemGroup": JeenyTypes.ItemGroupDeleteInput;
};

export type ItemStorageInventoryAreaLocationActionInputs = {
  "itemStorageInventoryAreaLocation.createItemStorageInventoryAreaLocation": JeenyTypes.ItemStorageInventoryAreaLocationInput;
  "itemStorageInventoryAreaLocation.saveItemStorageInventoryAreaLocation": JeenyTypes.ItemStorageInventoryAreaLocationUpdateInput;
  "itemStorageInventoryAreaLocation.deleteItemStorageInventoryAreaLocation": JeenyTypes.ItemStorageInventoryAreaLocationDeleteInput;
  "itemStorageInventoryAreaLocation.handleItemStorageInventoryAreaLocation": JeenyTypes.ItemStorageInventoryAreaLocationHandleInput;
};

export type ItemStorageInventoryAreaRuleActionInputs = {
  "itemStorageInventoryAreaRule.createItemStorageInventoryAreaRule": JeenyTypes.ItemStorageInventoryAreaRuleInput;
  "itemStorageInventoryAreaRule.saveItemStorageInventoryAreaRule": JeenyTypes.ItemStorageInventoryAreaRuleUpdateInput;
};

export type KitActionInputs = {
  "kit.createKitTemplate": JeenyTypes.CreateKitTemplateInput;
  "kit.saveKitTemplate": JeenyTypes.UpdateKitTemplateInput;
  "kit.addKitTemplatePartToKitTemplate": JeenyTypes.AddKitTemplatePartToKitTemplateInput;
  "kit.saveKitTemplatePart": JeenyTypes.UpdateKitTemplatePartInput;
  "kit.addKitTemplatePartOptionToKitTemplatePart": JeenyTypes.AddKitTemplatePartOptionToKitTemplatePartInput;
  "kit.setDefaultKitTemplatePartOption": JeenyTypes.SetDefaultKitTemplatePartOptionInput;
  "kit.deleteKitTemplatePartOptionFromKitTemplatePart": JeenyTypes.DeleteKitTemplatePartOptionFromKitTemplatePartInput;
  "kit.deleteKitTemplatePartFromKitTemplate": JeenyTypes.DeleteKitTemplatePartFromKitTemplateInput;
};

export type ProductActionInputs = {
  "product.createProduct": JeenyTypes.ProductInput;
  "product.saveProduct": JeenyTypes.ProductUpdateInput;
};

export type StorageInventoryAreaLocationActionInputs = {
  "storageInventoryAreaLocation.createStorageInventoryAreaLocation": JeenyTypes.StorageInventoryAreaLocationInput;
  "storageInventoryAreaLocation.saveStorageInventoryAreaLocation": JeenyTypes.StorageInventoryAreaLocationUpdateInput;
  "storageInventoryAreaLocation.deleteStorageInventoryAreaLocation": {
    facilityId: string;
    aisle: string;
    bay: string;
    inventoryAreaId: string;
    position: string;
    shelf: string;
  };
};

export type StorageInventoryAreaRuleActionInputs = {
  "storageInventoryAreaRule.createStorageInventoryAreaRule": JeenyTypes.StorageInventoryAreaRuleInput;
  "storageInventoryAreaRule.updateStorageInventoryAreaRule": JeenyTypes.StorageInventoryAreaRuleUpdateInput;
};

export type SupplierActionInputs = {
  "supplier.createSupplier": JeenyTypes.SupplierInput;
  "supplier.saveSupplier": JeenyTypes.SupplierInputUpdate;
};

export type SupplierItemActionInputs = {
  "supplierItem.createSupplierItem": JeenyTypes.SupplierItemInput;
  "supplierItem.saveSupplierItem": JeenyTypes.SupplierItemInputUpdate;
};

export type TeamActionInputs = {
  "team.createTeam": JeenyTypes.TeamInput;
  "team.saveTeam": JeenyTypes.TeamInputUpdate;
};

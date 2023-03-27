import { MutationFunctionOptions } from "@apollo/client";
import * as JeenyInputs from "../../types/actionInputs";
import { useActionArrival } from "./useActionArrival";
import { useActionCompany } from "./useActionCompany";
import { useActionDevice } from "./useActionDevice";
import { useActionDynamicContainer } from "./useActionDynamicContainer";
import { useActionEvent } from "./useActionEvent";
import { useActionFacility } from "./useActionFacility";
import { useActionFacilityItem } from "./useActionFacilityItem";
import { useActionInstruction } from "./useActionInstruction";
import { useActionInventoryArea } from "./useActionInventoryArea";
import { useActionInventoryRecord } from "./useActionInventoryRecord";
import { useActionItem } from "./useActionItem";
import { useActionItemGroup } from "./useActionItemGroup";
import { useActionItemStorageInventoryAreaLocation } from "./useActionItemStorageInventoryAreaLocation";
import { useActionItemStorageInventoryAreaRule } from "./useActionItemStorageInventoryAreaRule";
import { useActionKit } from "./useActionKit";
import { useActionProduct } from "./useActionProduct";
import { useActionStorageInventoryAreaLocation } from "./useActionStorageInventoryAreaLocation";
import { useActionStorageInventoryAreaRule } from "./useActionStorageInventoryAreaRule";
import { useActionSupplier } from "./useActionSupplier";
import { useActionSupplierItem } from "./useActionSupplierItem";
import { useActionTeam } from "./useActionTeam";

export type UseActionGeneric<T> = {
  [K in keyof T]-?: {
    action: NonNullable<K>;
    values: T[K];
    mutationOptions?: MutationFunctionOptions;
  };
}[keyof T];

export type UseActionSubmit = UseActionGeneric<JeenyInputs.ActionInputs>;

export const useAction = () => {
  const useArrivalSubmit = useActionArrival();
  const useCompanySubmit = useActionCompany();
  const useDeviceSubmit = useActionDevice();
  const useDynamicContainerSubmit = useActionDynamicContainer();
  const useEventSubmit = useActionEvent();
  const useFacilitySubmit = useActionFacility();
  const useFacilityItemSubmit = useActionFacilityItem();
  const useInstructionSubmit = useActionInstruction();
  const useInventoryAreaSubmit = useActionInventoryArea();
  const useInventoryRecordSubmit = useActionInventoryRecord();
  const useItemSubmit = useActionItem();
  const useItemGroupSubmit = useActionItemGroup();
  const useItemStorageInventoryAreaLocationSubmit =
    useActionItemStorageInventoryAreaLocation();
  const useItemStorageInventoryAreaRuleSubmit =
    useActionItemStorageInventoryAreaRule();
  const useKitSubmit = useActionKit();
  const useProductSubmit = useActionProduct();
  const useStorageInventoryAreaLocationSubmit =
    useActionStorageInventoryAreaLocation();
  const useStorageInventoryAreaRuleSubmit = useActionStorageInventoryAreaRule();
  const useSupplierSubmit = useActionSupplier();
  const useSupplierItemSubmit = useActionSupplierItem();
  const useTeamSubmit = useActionTeam();

  const submit = async (props: UseActionSubmit) => {
    try {
      let result = null;

      result = await useArrivalSubmit(
        props as UseActionGeneric<JeenyInputs.ArrivalActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useCompanySubmit(
        props as UseActionGeneric<JeenyInputs.CompanyActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useDeviceSubmit(
        props as UseActionGeneric<JeenyInputs.DeviceActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useDynamicContainerSubmit(
        props as UseActionGeneric<JeenyInputs.DynamicContainerActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useEventSubmit(
        props as UseActionGeneric<JeenyInputs.EventActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useFacilitySubmit(
        props as UseActionGeneric<JeenyInputs.FacilityActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useFacilityItemSubmit(
        props as UseActionGeneric<JeenyInputs.FacilityItemActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useInstructionSubmit(
        props as UseActionGeneric<JeenyInputs.InstructionActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useInventoryAreaSubmit(
        props as UseActionGeneric<JeenyInputs.InventoryAreaActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useInventoryRecordSubmit(
        props as UseActionGeneric<JeenyInputs.InventoryRecordActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useItemStorageInventoryAreaLocationSubmit(
        props as UseActionGeneric<JeenyInputs.ItemStorageInventoryAreaLocationActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useItemStorageInventoryAreaRuleSubmit(
        props as UseActionGeneric<JeenyInputs.ItemStorageInventoryAreaRuleActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useItemSubmit(
        props as UseActionGeneric<JeenyInputs.ItemActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useItemGroupSubmit(
        props as UseActionGeneric<JeenyInputs.ItemGroupActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useKitSubmit(
        props as UseActionGeneric<JeenyInputs.KitActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useProductSubmit(
        props as UseActionGeneric<JeenyInputs.ProductActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useStorageInventoryAreaLocationSubmit(
        props as UseActionGeneric<JeenyInputs.StorageInventoryAreaLocationActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useStorageInventoryAreaRuleSubmit(
        props as UseActionGeneric<JeenyInputs.StorageInventoryAreaRuleActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useSupplierSubmit(
        props as UseActionGeneric<JeenyInputs.SupplierActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useSupplierItemSubmit(
        props as UseActionGeneric<JeenyInputs.SupplierItemActionInputs>
      );

      if (result) {
        return result;
      }

      result = await useTeamSubmit(
        props as UseActionGeneric<JeenyInputs.TeamActionInputs>
      );

      if (result) {
        return result;
      }

      return result;
    } catch (e: any) {
      return null;
    }
  };

  return submit;
};

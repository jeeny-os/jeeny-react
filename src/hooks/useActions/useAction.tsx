import * as JeenyInputs from "../../types/actionInputs";
import { useActionArrival } from "./useActionArrival";
import { useActionCompany } from "./useActionCompany";
import { useActionDevice } from "./useActionDevice";
import { useActionDynamicContainer } from "./useActionDynamicContainer";
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
  };
}[keyof T];

export type UseActionSubmit = UseActionGeneric<JeenyInputs.ActionInputs>;

export const useAction = () => {
  const useArrivalSubmit = useActionArrival();
  const useCompanySubmit = useActionCompany();
  const useDeviceSubmit = useActionDevice();
  const useDynamicContainerSubmit = useActionDynamicContainer();
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

  const submit = async ({ action, values }: UseActionSubmit) => {
    try {
      let result = null;

      result = await useArrivalSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.ArrivalActionInputs>);

      if (result) {
        return result;
      }

      result = await useCompanySubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.CompanyActionInputs>);

      if (result) {
        return result;
      }

      result = await useDeviceSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.DeviceActionInputs>);

      if (result) {
        return result;
      }

      result = await useDynamicContainerSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.DynamicContainerActionInputs>);

      if (result) {
        return result;
      }

      result = await useFacilitySubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.FacilityActionInputs>);

      if (result) {
        return result;
      }

      result = await useFacilityItemSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.FacilityItemActionInputs>);

      if (result) {
        return result;
      }

      result = await useInstructionSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.InstructionActionInputs>);

      if (result) {
        return result;
      }

      result = await useInventoryAreaSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.InventoryAreaActionInputs>);

      if (result) {
        return result;
      }

      result = await useInventoryRecordSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.InventoryRecordActionInputs>);

      if (result) {
        return result;
      }

      result = await useItemStorageInventoryAreaLocationSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.ItemStorageInventoryAreaLocationActionInputs>);

      if (result) {
        return result;
      }

      result = await useItemStorageInventoryAreaRuleSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.ItemStorageInventoryAreaRuleActionInputs>);

      if (result) {
        return result;
      }

      result = await useItemSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.ItemActionInputs>);

      if (result) {
        return result;
      }

      result = await useItemGroupSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.ItemGroupActionInputs>);

      if (result) {
        return result;
      }

      result = await useKitSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.KitActionInputs>);

      if (result) {
        return result;
      }

      result = await useProductSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.ProductActionInputs>);

      if (result) {
        return result;
      }

      result = await useStorageInventoryAreaLocationSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.StorageInventoryAreaLocationActionInputs>);

      if (result) {
        return result;
      }

      result = await useStorageInventoryAreaRuleSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.StorageInventoryAreaRuleActionInputs>);

      if (result) {
        return result;
      }

      result = await useSupplierSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.SupplierActionInputs>);

      if (result) {
        return result;
      }

      result = await useSupplierItemSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.SupplierItemActionInputs>);

      if (result) {
        return result;
      }

      result = await useTeamSubmit({
        action,
        values,
      } as UseActionGeneric<JeenyInputs.TeamActionInputs>);

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

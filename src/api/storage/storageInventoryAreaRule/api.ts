import { useLazyQuery, useMutation } from "@apollo/client";
import { StorageInventoryAreaRuleApi } from "./apiInterface";
import {
  GET_STORAGE_INVENTORY_AREA_RULE,
  GET_STORAGE_INVENTORY_AREA_RULES,
  CREATE_STORAGE_INVENTORY_AREA_RULE,
  UPDATE_STORAGE_INVENTORY_AREA_RULE,
} from "./gql";

export const useStorageInventoryAreaRuleApi = (
  custom?: StorageInventoryAreaRuleApi
) => {
  const [
    getStorageInventoryAreaRule,
    {
      data: getStorageInventoryAreaRuleData,
      loading: getStorageInventoryAreaRuleLoading,
    },
  ] = useLazyQuery(
    custom?.getStorageInventoryAreaRule?.query ||
      GET_STORAGE_INVENTORY_AREA_RULE,
    custom?.getStorageInventoryAreaRule?.options
  );

  const [
    getStorageInventoryAreaRules,
    {
      data: getStorageInventoryAreaRulesData,
      loading: getStorageInventoryAreaRulesLoading,
    },
  ] = useLazyQuery(
    custom?.getStorageInventoryAreaRules?.query ||
      GET_STORAGE_INVENTORY_AREA_RULES,
    custom?.getStorageInventoryAreaRules?.options
  );

  const [
    createStorageInventoryAreaRule,
    {
      data: createStorageInventoryAreaRuleData,
      loading: createStorageInventoryAreaRuleLoading,
    },
  ] = useMutation(
    custom?.createStorageInventoryAreaRule?.mutation ||
      CREATE_STORAGE_INVENTORY_AREA_RULE,
    custom?.createStorageInventoryAreaRule?.options
  );

  const [
    updateStorageInventoryAreaRule,
    {
      data: updateStorageInventoryAreaRuleData,
      loading: updateStorageInventoryAreaRuleLoading,
    },
  ] = useMutation(
    custom?.updateStorageInventoryAreaRule?.mutation ||
      UPDATE_STORAGE_INVENTORY_AREA_RULE,
    custom?.updateStorageInventoryAreaRule?.options
  );

  return {
    getStorageInventoryAreaRule: {
      query: getStorageInventoryAreaRule,
      data: getStorageInventoryAreaRuleData,
      loading: getStorageInventoryAreaRuleLoading,
    },
    getStorageInventoryAreaRules: {
      query: getStorageInventoryAreaRules,
      data: getStorageInventoryAreaRulesData,
      loading: getStorageInventoryAreaRulesLoading,
    },
    createStorageInventoryAreaRule: {
      mutation: createStorageInventoryAreaRule,
      data: createStorageInventoryAreaRuleData,
      loading: createStorageInventoryAreaRuleLoading,
    },
    updateStorageInventoryAreaRule: {
      mutation: updateStorageInventoryAreaRule,
      data: updateStorageInventoryAreaRuleData,
      loading: updateStorageInventoryAreaRuleLoading,
    },
  };
};

import { useLazyQuery, useMutation } from "@apollo/client";
import { ItemStorageInventoryAreaRuleApi } from "./apiInterface";
import {
  CREATE_ITEM_STORAGE_INVENTORY_AREA_RULE,
  GET_ITEM_STORAGE_INVENTORY_AREA_RULE,
  GET_ITEM_STORAGE_INVENTORY_AREA_RULES,
  SAVE_ITEM_STORAGE_INVENTORY_AREA_RULE,
} from "./gql";

export const useItemStorageInventoryAreaRuleApi = (
  custom?: ItemStorageInventoryAreaRuleApi
) => {
  const [
    getItemStorageInventoryAreaRule,
    {
      data: getItemStorageInventoryAreaRuleData,
      loading: getItemStorageInventoryAreaRuleLoading,
    },
  ] = useLazyQuery(
    custom?.getItemStorageInventoryAreaRule?.query ||
      GET_ITEM_STORAGE_INVENTORY_AREA_RULE,
    custom?.getItemStorageInventoryAreaRule?.options
  );

  const [
    getItemStorageInventoryAreaRules,
    {
      data: getItemStorageInventoryAreaRulesData,
      loading: getItemStorageInventoryAreaRulesLoading,
    },
  ] = useLazyQuery(
    custom?.getItemStorageInventoryAreaRules?.query ||
      GET_ITEM_STORAGE_INVENTORY_AREA_RULES,
    custom?.getItemStorageInventoryAreaRules?.options
  );

  const [
    createItemStorageInventoryAreaRule,
    {
      data: createItemStorageInventoryAreaRuleData,
      loading: createItemStorageInventoryAreaRuleLoading,
    },
  ] = useMutation(
    custom?.createItemStorageInventoryAreaRule?.mutation ||
      CREATE_ITEM_STORAGE_INVENTORY_AREA_RULE,
    custom?.createItemStorageInventoryAreaRule?.options
  );

  const [
    saveItemStorageInventoryAreaRule,
    {
      data: saveItemStorageInventoryAreaRuleData,
      loading: saveItemStorageInventoryAreaRuleLoading,
    },
  ] = useMutation(
    custom?.saveItemStorageInventoryAreaRule?.mutation ||
      SAVE_ITEM_STORAGE_INVENTORY_AREA_RULE,
    custom?.saveItemStorageInventoryAreaRule?.options
  );

  return {
    getItemStorageInventoryAreaRule: {
      query: getItemStorageInventoryAreaRule,
      data: getItemStorageInventoryAreaRuleData,
      loading: getItemStorageInventoryAreaRuleLoading,
    },
    getItemStorageInventoryAreaRules: {
      query: getItemStorageInventoryAreaRules,
      data: getItemStorageInventoryAreaRulesData,
      loading: getItemStorageInventoryAreaRulesLoading,
    },
    createItemStorageInventoryAreaRule: {
      mutation: createItemStorageInventoryAreaRule,
      data: createItemStorageInventoryAreaRuleData,
      loading: createItemStorageInventoryAreaRuleLoading,
    },
    saveItemStorageInventoryAreaRule: {
      mutation: saveItemStorageInventoryAreaRule,
      data: saveItemStorageInventoryAreaRuleData,
      loading: saveItemStorageInventoryAreaRuleLoading,
    },
  };
};

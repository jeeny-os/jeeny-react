import { useLazyQuery, useMutation } from "@apollo/client";
import { ItemGroupApi } from "./apiInterface";
import {
  CREATE_ITEM_GROUP,
  DELETE_ITEM_GROUP,
  GET_ITEM_GROUP_DETAILS,
  GET_ITEM_GROUPS_WITH_ITEMS,
  SAVE_ITEM_GROUP,
} from "./gql";

export const useItemGroupApi = (custom?: ItemGroupApi) => {
  const [
    getItemGroupDetails,
    { data: getItemGroupDetailsData, loading: getItemGroupDetailsLoading },
  ] = useLazyQuery(
    custom?.getItemGroupDetails?.query || GET_ITEM_GROUP_DETAILS,
    custom?.getItemGroupDetails?.options
  );

  const [
    getItemGroupsWithItems,
    {
      data: getItemGroupsWithItemsData,
      loading: getItemGroupsWithItemsLoading,
      fetchMore: getItemGroupsWithItemsFetchMore,
    },
  ] = useLazyQuery(
    custom?.getItemGroupsWithItems?.query || GET_ITEM_GROUPS_WITH_ITEMS,
    custom?.getItemGroupsWithItems?.options
  );

  const [
    createItemGroup,
    { data: createItemGroupData, loading: createItemGroupLoading },
  ] = useMutation(
    custom?.createItemGroup?.mutation || CREATE_ITEM_GROUP,
    custom?.createItemGroup?.options
  );

  const [
    saveItemGroup,
    { data: saveItemGroupData, loading: saveItemGroupLoading },
  ] = useMutation(
    custom?.saveItemGroup?.mutation || SAVE_ITEM_GROUP,
    custom?.saveItemGroup?.options
  );

  const [
    deleteItemGroup,
    { data: deleteItemGroupData, loading: deleteItemGroupLoading },
  ] = useMutation(
    custom?.deleteItemGroup?.mutation || DELETE_ITEM_GROUP,
    custom?.deleteItemGroup?.options
  );

  return {
    getItemGroupDetails: {
      query: getItemGroupDetails,
      data: getItemGroupDetailsData,
      loading: getItemGroupDetailsLoading,
    },
    getItemGroupsWithItems: {
      query: getItemGroupsWithItems,
      data: getItemGroupsWithItemsData,
      fetchMore: getItemGroupsWithItemsFetchMore,
      loading: getItemGroupsWithItemsLoading,
    },
    createItemGroup: {
      mutation: createItemGroup,
      data: createItemGroupData,
      loading: createItemGroupLoading,
    },
    saveItemGroup: {
      mutation: saveItemGroup,
      data: saveItemGroupData,
      loading: saveItemGroupLoading,
    },
    deleteItemGroup: {
      mutation: deleteItemGroup,
      data: deleteItemGroupData,
      loading: deleteItemGroupLoading,
    },
  };
};

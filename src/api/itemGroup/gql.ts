import { gql } from "@apollo/client";
import {
  ITEM_GROUPS_WITH_ITEMS_FRAGMENT,
  ITEM_GROUP_DETAILS_FRAGMENT,
  ITEM_GROUP_FRAGMENT,
} from "./fragments";

export const GET_ITEM_GROUP_DETAILS = gql`
  ${ITEM_GROUP_DETAILS_FRAGMENT}
  query getItemGroupDetails($id: String!) {
    getItemGroupDetails(id: $id) {
      ...ItemGroupDetails
    }
  }
`;

export const GET_ITEM_GROUPS_WITH_ITEMS = gql`
  ${ITEM_GROUPS_WITH_ITEMS_FRAGMENT}
  query getItemGroupsWithItems {
    getItemGroupsWithItems {
      ...ItemGroupsWithItems
    }
  }
`;

export const CREATE_ITEM_GROUP = gql`
  ${ITEM_GROUP_FRAGMENT}
  mutation createItemGroup($data: ItemGroupInput!) {
    createItemGroup(data: $data) {
      ...ItemGroup
    }
  }
`;

export const SAVE_ITEM_GROUP = gql`
  ${ITEM_GROUP_FRAGMENT}
  mutation saveItemGroup($data: ItemGroupUpdateInput!) {
    saveItemGroup(data: $data) {
      ...ItemGroup
    }
  }
`;
export const DELETE_ITEM_GROUP = gql`
  ${ITEM_GROUP_FRAGMENT}
  mutation deleteItemGroup($data: ItemGroupDeleteInput!) {
    deleteItemGroup(data: $data) {
      ...ItemGroup
    }
  }
`;

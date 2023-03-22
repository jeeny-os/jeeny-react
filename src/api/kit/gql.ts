import { gql } from "@apollo/client";
import { FILE_FRAGMENT } from "../fragments/common";
import {
  KIT_TEMPLATE_BOM_ENTRY_FRAGMENT,
  KIT_TEMPLATE_DETAILS_FRAGMENT,
  KIT_TEMPLATE_FRAGMENT,
  KIT_TEMPLATE_PART_FRAGMENT,
  KIT_TEMPLATE_PART_OPTION_FRAGMENT,
  KIT_TEMPLATE_TREE_FRAGMENT,
} from "./fragments";

export const GET_KIT_TEMPLATE_DETAILS = gql`
  ${KIT_TEMPLATE_DETAILS_FRAGMENT}
  query getKitTemplateDetails($id: String!) {
    getKitTemplateDetails(id: $id) {
      ...KitTemplateDetails
    }
  }
`;

export const GET_KIT_TEMPLATE_TREE = gql`
  ${KIT_TEMPLATE_TREE_FRAGMENT}
  query getKitTemplateTree($id: String!) {
    getKitTemplateTree(id: $id) {
      ...KitTemplateTree
    }
  }
`;

export const GET_KIT_TEMPLATE_BOM = gql`
  ${KIT_TEMPLATE_BOM_ENTRY_FRAGMENT}
  query getKitTemplateBom($data: GetKitTemplateBomInput!) {
    getKitTemplateBom(data: $data) {
      ...KitTemplateBomEntry
    }
  }
`;

export const GET_KIT_TEMPLATES = gql`
  ${KIT_TEMPLATE_FRAGMENT}
  query getKitTemplates {
    getKitTemplates {
      cursor
      items {
        ...KitTemplate
      }
    }
  }
`;

export const CREATE_KIT_TEMPLATE = gql`
  ${KIT_TEMPLATE_FRAGMENT}
  mutation createKitTemplate($data: CreateKitTemplateInput!) {
    createKitTemplate(data: $data) {
      ...KitTemplate
    }
  }
`;

export const SAVE_KIT_TEMPLATE = gql`
  ${KIT_TEMPLATE_FRAGMENT}
  mutation saveKitTemplate($data: UpdateKitTemplateInput!) {
    saveKitTemplate(data: $data) {
      ...KitTemplate
    }
  }
`;

export const ADD_KIT_TEMPLATE_PART_TO_KIT_TEMPLATE = gql`
  ${KIT_TEMPLATE_PART_OPTION_FRAGMENT}
  mutation addKitTemplatePartToKitTemplate(
    $data: AddKitTemplatePartToKitTemplateInput!
  ) {
    addKitTemplatePartToKitTemplate(data: $data) {
      ...KitTemplatePart
    }
  }
`;

export const SAVE_KIT_TEMPLATE_PART = gql`
  ${KIT_TEMPLATE_PART_FRAGMENT}
  mutation saveKitTemplatePart($data: UpdateKitTemplatePartInput!) {
    saveKitTemplatePart(data: $data) {
      ...KitTemplatePart
    }
  }
`;

export const ADD_KIT_TEMPLATE_PART_OPTION_TO_KIT_TEMPLATE_PART = gql`
  ${KIT_TEMPLATE_PART_OPTION_FRAGMENT}
  mutation addKitTemplatePartOptionToKitTemplatePart(
    $data: AddKitTemplatePartOptionToKitTemplatePartInput!
  ) {
    addKitTemplatePartOptionToKitTemplatePart(data: $data) {
      ...KitTemplatePartOption
    }
  }
`;

export const SET_DEFAULT_KIT_TEMPLATE_PART_OPTION = gql`
  ${KIT_TEMPLATE_PART_FRAGMENT}
  mutation setDefaultKitTemplatePartOption(
    $data: SetDefaultKitTemplatePartOptionInput!
  ) {
    setDefaultKitTemplatePartOption(data: $data) {
      ...KitTemplatePart
    }
  }
`;

export const DELETE_KIT_TEMPLATE_PART_OPTION_FROM_KIT_TEMPLATE_PART = gql`
  ${KIT_TEMPLATE_PART_OPTION_FRAGMENT}
  mutation deleteKitTemplatePartOptionFromKitTemplatePart(
    $data: DeleteKitTemplatePartOptionFromKitTemplatePartInput!
  ) {
    deleteKitTemplatePartOptionFromKitTemplatePart(data: $data) {
      ...KitTemplatePartOption
    }
  }
`;

export const DELETE_KIT_TEMPLATE_PART_FROM_KIT_TEMPLATE = gql`
  ${KIT_TEMPLATE_PART_FRAGMENT}
  mutation deleteKitTemplatePartFromKitTemplate(
    $data: DeleteKitTemplatePartFromKitTemplateInput!
  ) {
    deleteKitTemplatePartFromKitTemplate(data: $data) {
      ...KitTemplatePart
    }
  }
`;

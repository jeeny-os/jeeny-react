import { gql } from "@apollo/client";
import { ITEM_FRAGMENT } from "../item/fragments";

export const KIT_TEMPLATE_DIMENSIONS = gql`
  fragment KitTemplateDimensions on KitTemplateDimensions {
    numberOfDimensions
    width
    height
    length
  }
`;

export const KIT_TEMPLATE_PART_DIMENSION_CALCULATION = gql`
  fragment KitTemplatePartDimensionCalculation on KitTemplatePartDimensionCalculation {
    type
    base
    parentMultiplier
    parentOffset
  }
`;

export const KIT_TEMPLATE_PART_DIMENSIONS = gql`
  fragment KitTemplatePartDimensions on KitTemplatePartDimensions {
    numberOfDimensions
    width {
      ...KitTemplatePartDimensionCalculation
    }
    height {
      ...KitTemplatePartDimensionCalculation
    }
    length {
      ...KitTemplatePartDimensionCalculation
    }
  }
  ${KIT_TEMPLATE_PART_DIMENSION_CALCULATION}
`;

export const KIT_TEMPLATE_FRAGMENT = gql`
  fragment KitTemplate on KitTemplate {
    id
    companyId
    name
    code
    description
    status
    createdOn
    updatedOn
    defaultImageUrl
    instructions
    category
    defaultDimensions {
      ...KitTemplateDimensions
    }
  }
  ${KIT_TEMPLATE_DIMENSIONS}
`;

export const KIT_TEMPLATE_PART_FRAGMENT = gql`
  fragment KitTemplatePart on KitTemplatePart {
    id
    companyId
    parentId
    name
    quantity
    defaultOptionId
    status
    createdOn
    updatedOn
    dimensions {
      ...KitTemplatePartDimensions
    }
  }
  ${KIT_TEMPLATE_PART_DIMENSIONS}
`;

export const KIT_TEMPLATE_PART_OPTION_CHILD_DETAILS_FRAGMENT = gql`
  fragment KitTemplatePartOptionChildDetails on KitTemplatePartOptionChildDetails {
    name
    partNumber
    defaultImageUrl
    code
  }
`;

export const KIT_TEMPLATE_PART_OPTION_FRAGMENT = gql`
  fragment KitTemplatePartOption on KitTemplatePartOption {
    id
    companyId
    partId
    parentId
    childType
    childId
    childDetails {
      ...KitTemplatePartOptionChildDetails
    }
    createdOn
    updatedOn
  }
  ${KIT_TEMPLATE_PART_OPTION_CHILD_DETAILS_FRAGMENT}
`;

export const KIT_TEMPLATE_DETAILS_FRAGMENT = gql`
  fragment KitTemplateDetails on KitTemplateDetails {
    kitTemplate {
      ...KitTemplate
    }
    kitTemplateParts {
      ...KitTemplatePart
    }
    kitTemplatePartOptions {
      ...KitTemplatePartOption
    }
  }
  ${KIT_TEMPLATE_FRAGMENT}
  ${KIT_TEMPLATE_PART_FRAGMENT}
  ${KIT_TEMPLATE_PART_OPTION_FRAGMENT}
`;

export const KIT_TEMPLATE_TREE_FRAGMENT = gql`
  fragment KitTemplateTree on KitTemplateTree {
    rootKitTemplateId
    items {
      ...Item
    }
    kitTemplates {
      ...KitTemplate
    }
    kitTemplateParts {
      ...KitTemplatePart
    }
    kitTemplatePartOptions {
      ...KitTemplatePartOption
    }
  }
  ${ITEM_FRAGMENT}
  ${KIT_TEMPLATE_FRAGMENT}
  ${KIT_TEMPLATE_PART_FRAGMENT}
  ${KIT_TEMPLATE_PART_OPTION_FRAGMENT}
`;

export const KIT_TEMPLATE_BOM_FRAGMENT = gql`
  fragment KitTemplateBom on KitTemplateBom {
    numberOfChildKitTemplates
    numberOfItems
    numberOfUniqueSKUs
    weight
    cost
  }
`;

export const KIT_TEMPLATE_BOM_ENTRY_FRAGMENT = gql`
  fragment KitTemplateBomEntry on KitTemplateBomEntry {
    item {
      ...Item
    }
    quantity
    pricePerBomUom
    unitQuantity
  }
  ${ITEM_FRAGMENT}
`;

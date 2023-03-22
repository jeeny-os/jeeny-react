import { useLazyQuery, useMutation } from "@apollo/client";
import { KitApi } from "./apiInterface";
import {
  GET_KIT_TEMPLATE_DETAILS,
  GET_KIT_TEMPLATES,
  CREATE_KIT_TEMPLATE,
  SAVE_KIT_TEMPLATE,
  ADD_KIT_TEMPLATE_PART_OPTION_TO_KIT_TEMPLATE_PART,
  SET_DEFAULT_KIT_TEMPLATE_PART_OPTION,
  DELETE_KIT_TEMPLATE_PART_OPTION_FROM_KIT_TEMPLATE_PART,
  DELETE_KIT_TEMPLATE_PART_FROM_KIT_TEMPLATE,
  SAVE_KIT_TEMPLATE_PART,
  GET_KIT_TEMPLATE_TREE,
  GET_KIT_TEMPLATE_BOM,
  ADD_KIT_TEMPLATE_PART_TO_KIT_TEMPLATE,
} from "./gql";

export const useKitApi = (custom?: KitApi) => {
  const [
    getKitTemplateDetails,
    { data: getKitTemplateDetailsData, loading: getKitTemplateDetailsLoading },
  ] = useLazyQuery(
    custom?.getKitTemplateDetails?.query || GET_KIT_TEMPLATE_DETAILS,
    custom?.getKitTemplateDetails?.options
  );

  const [
    getKitTemplateTree,
    { data: getKitTemplateTreeData, loading: getKitTemplateTreeLoading },
  ] = useLazyQuery(
    custom?.getKitTemplateTree?.query || GET_KIT_TEMPLATE_TREE,
    custom?.getKitTemplateTree?.options
  );

  const [
    getKitTemplateBom,
    { data: getKitTemplateBomData, loading: getKitTemplateBomLoading },
  ] = useLazyQuery(
    custom?.getKitTemplateBom?.query || GET_KIT_TEMPLATE_BOM,
    custom?.getKitTemplateBom?.options
  );

  const [
    getKitTemplates,
    {
      data: getKitTemplatesData,
      loading: getKitTemplatesLoading,
      fetchMore: getKitTemplatesFetchMore,
    },
  ] = useLazyQuery(
    custom?.getKitTemplates?.query || GET_KIT_TEMPLATES,
    custom?.getKitTemplates?.options
  );

  const [
    createKitTemplate,
    { data: createKitTemplateData, loading: createKitTemplateLoading },
  ] = useMutation(
    custom?.createKitTemplate?.mutation || CREATE_KIT_TEMPLATE,
    custom?.createKitTemplate?.options
  );

  const [
    saveKitTemplate,
    { data: saveKitTemplateData, loading: saveKitTemplateLoading },
  ] = useMutation(
    custom?.saveKitTemplate?.mutation || SAVE_KIT_TEMPLATE,
    custom?.saveKitTemplate?.options
  );

  const [
    addKitTemplatePartToKitTemplate,
    {
      data: addKitTemplatePartToKitTemplateData,
      loading: addKitTemplatePartToKitTemplateLoading,
    },
  ] = useMutation(
    custom?.addKitTemplatePartToKitTemplate?.mutation ||
      ADD_KIT_TEMPLATE_PART_TO_KIT_TEMPLATE,
    custom?.addKitTemplatePartToKitTemplate?.options
  );

  const [
    saveKitTemplatePart,
    { data: saveKitTemplatePartData, loading: saveKitTemplatePartLoading },
  ] = useMutation(
    custom?.saveKitTemplatePart?.mutation || SAVE_KIT_TEMPLATE_PART,
    custom?.saveKitTemplatePart?.options
  );

  const [
    addKitTemplatePartOptionToKitTemplatePart,
    {
      data: addKitTemplatePartOptionToKitTemplatePartData,
      loading: addKitTemplatePartOptionToKitTemplatePartLoading,
    },
  ] = useMutation(
    custom?.addKitTemplatePartOptionToKitTemplatePart?.mutation ||
      ADD_KIT_TEMPLATE_PART_OPTION_TO_KIT_TEMPLATE_PART,
    custom?.addKitTemplatePartOptionToKitTemplatePart?.options
  );

  const [
    setDefaultKitTemplatePartOption,
    {
      data: setDefaultKitTemplatePartOptionData,
      loading: setDefaultKitTemplatePartOptionLoading,
    },
  ] = useMutation(
    custom?.setDefaultKitTemplatePartOption?.mutation ||
      SET_DEFAULT_KIT_TEMPLATE_PART_OPTION,
    custom?.setDefaultKitTemplatePartOption?.options
  );

  const [
    deleteKitTemplatePartFromKitTemplate,
    {
      data: deleteKitTemplatePartFromKitTemplateData,
      loading: deleteKitTemplatePartFromKitTemplateLoading,
    },
  ] = useMutation(
    custom?.deleteKitTemplatePartFromKitTemplate?.mutation ||
      DELETE_KIT_TEMPLATE_PART_FROM_KIT_TEMPLATE,
    custom?.deleteKitTemplatePartFromKitTemplate?.options
  );

  const [
    deleteKitTemplatePartOptionFromKitTemplatePart,
    {
      data: deleteKitTemplatePartOptionFromKitTemplatePartData,
      loading: deleteKitTemplatePartOptionFromKitTemplatePartLoading,
    },
  ] = useMutation(
    custom?.deleteKitTemplatePartOptionFromKitTemplatePart?.mutation ||
      DELETE_KIT_TEMPLATE_PART_OPTION_FROM_KIT_TEMPLATE_PART,
    custom?.deleteKitTemplatePartOptionFromKitTemplatePart?.options
  );

  return {
    getKitTemplateDetails: {
      query: getKitTemplateDetails,
      data: getKitTemplateDetailsData,
      loading: getKitTemplateDetailsLoading,
    },
    getKitTemplateTree: {
      query: getKitTemplateTree,
      data: getKitTemplateTreeData,
      loading: getKitTemplateTreeLoading,
    },
    getKitTemplateBom: {
      query: getKitTemplateBom,
      data: getKitTemplateBomData,
      loading: getKitTemplateBomLoading,
    },
    getKitTemplates: {
      query: getKitTemplates,
      data: getKitTemplatesData,
      fetchMore: getKitTemplatesFetchMore,
      loading: getKitTemplatesLoading,
    },
    createKitTemplate: {
      mutation: createKitTemplate,
      data: createKitTemplateData,
      loading: createKitTemplateLoading,
    },
    saveKitTemplate: {
      mutation: saveKitTemplate,
      data: saveKitTemplateData,
      loading: saveKitTemplateLoading,
    },
    addKitTemplatePartToKitTemplate: {
      mutation: addKitTemplatePartToKitTemplate,
      data: addKitTemplatePartToKitTemplateData,
      loading: addKitTemplatePartToKitTemplateLoading,
    },
    saveKitTemplatePart: {
      mutation: saveKitTemplatePart,
      data: saveKitTemplatePartData,
      loading: saveKitTemplatePartLoading,
    },
    addKitTemplatePartOptionToKitTemplatePart: {
      mutation: addKitTemplatePartOptionToKitTemplatePart,
      data: addKitTemplatePartOptionToKitTemplatePartData,
      loading: addKitTemplatePartOptionToKitTemplatePartLoading,
    },
    setDefaultKitTemplatePartOption: {
      mutation: setDefaultKitTemplatePartOption,
      data: setDefaultKitTemplatePartOptionData,
      loading: setDefaultKitTemplatePartOptionLoading,
    },
    deleteKitTemplatePartOptionFromKitTemplatePart: {
      mutation: deleteKitTemplatePartOptionFromKitTemplatePart,
      data: deleteKitTemplatePartOptionFromKitTemplatePartData,
      loading: deleteKitTemplatePartOptionFromKitTemplatePartLoading,
    },
    deleteKitTemplatePartFromKitTemplate: {
      mutation: deleteKitTemplatePartFromKitTemplate,
      data: deleteKitTemplatePartFromKitTemplateData,
      loading: deleteKitTemplatePartFromKitTemplateLoading,
    },
  };
};

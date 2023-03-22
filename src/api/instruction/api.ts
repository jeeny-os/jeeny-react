import { useLazyQuery, useMutation } from "@apollo/client";
import { InstructionTemplateApi } from "./apiInterface";
import {
  ADD_INSTRUCTION_TEMPLATE_STEP_TO_INSTRUCTION_TEMPLATE,
  CREATE_INSTRUCTION_SUBJECT,
  CREATE_INSTRUCTION_TEMPLATE,
  DELETE_INSTRUCTION_SUBJECT,
  DELETE_INSTRUCTION_TEMPLATE_STEP_FROM_INSTRUCTION_TEMPLATE,
  EXECUTE_INSTRUCTION_TEMPLATE,
  GET_INSTRUCTION_EXECUTIONS_BY_EVENT_ID,
  GET_INSTRUCTION_EXECUTIONS_BY_EXECUTOR_ID,
  GET_INSTRUCTION_EXECUTIONS_BY_INSTRUCTION_TEMPLATE_ID,
  GET_INSTRUCTION_EXECUTIONS_BY_TRIGGER,
  GET_INSTRUCTION_EXECUTION_DETAILS,
  GET_INSTRUCTION_SUBJECTS_BY_SUBJECT,
  GET_INSTRUCTION_SUBJECTS_BY_TEMPLATE,
  GET_INSTRUCTION_TEMPLATE,
  GET_INSTRUCTION_TEMPLATES,
  GET_INSTRUCTION_TEMPLATE_DETAILS,
  SAVE_INSTRUCTION_EXECUTION,
  SAVE_INSTRUCTION_SUBJECT,
  SAVE_INSTRUCTION_TEMPLATE,
  SAVE_INSTRUCTION_TEMPLATE_STEP,
  SUBMIT_INSTRUCTION_EXECUTION_STEP,
} from "./gql";

export const useInstructionApi = (custom?: InstructionTemplateApi) => {
  const moreApi = useInstructionApi2();

  const [
    getInstructionTemplate,
    {
      data: getInstructionTemplateData,
      loading: getInstructionTemplateLoading,
    },
  ] = useLazyQuery(
    custom?.getInstructionTemplate?.query || GET_INSTRUCTION_TEMPLATE,
    custom?.getInstructionTemplate?.options
  );

  const [
    getInstructionTemplates,
    {
      data: getInstructionTemplatesData,
      loading: getInstructionTemplatesLoading,
      fetchMore: getInstructionTemplatesFetchMore,
    },
  ] = useLazyQuery(
    custom?.getInstructionTemplates?.query || GET_INSTRUCTION_TEMPLATES,
    custom?.getInstructionTemplates?.options
  );

  const [
    createInstructionTemplate,
    {
      data: createInstructionTemplateData,
      loading: createInstructionTemplateLoading,
    },
  ] = useMutation(
    custom?.createInstructionTemplate?.mutation || CREATE_INSTRUCTION_TEMPLATE,
    custom?.createInstructionTemplate?.options
  );

  const [
    saveInstructionTemplate,
    {
      data: saveInstructionTemplateData,
      loading: saveInstructionTemplateLoading,
    },
  ] = useMutation(
    custom?.saveInstructionTemplate?.mutation || SAVE_INSTRUCTION_TEMPLATE,
    custom?.saveInstructionTemplate?.options
  );

  const [
    addInstructionTemplateStepToInstructionTemplate,
    {
      data: addInstructionTemplateStepToInstructionTemplateData,
      loading: addInstructionTemplateStepToInstructionTemplateLoading,
    },
  ] = useMutation(
    custom?.addInstructionTemplateStepToInstructionTemplate?.mutation ||
      ADD_INSTRUCTION_TEMPLATE_STEP_TO_INSTRUCTION_TEMPLATE,
    custom?.addInstructionTemplateStepToInstructionTemplate?.options
  );

  const [
    saveInstructionTemplateStep,
    {
      data: saveInstructionTemplateStepData,
      loading: saveInstructionTemplateStepLoading,
    },
  ] = useMutation(
    custom?.saveInstructionTemplateStep?.mutation ||
      SAVE_INSTRUCTION_TEMPLATE_STEP,
    custom?.saveInstructionTemplateStep?.options
  );

  const [
    deleteInstructionTemplateStepFromInstructionTemplate,
    {
      data: deleteInstructionTemplateStepFromInstructionTemplateData,
      loading: deleteInstructionTemplateStepFromInstructionTemplateLoading,
    },
  ] = useMutation(
    custom?.deleteInstructionTemplateStepFromInstructionTemplate?.mutation ||
      DELETE_INSTRUCTION_TEMPLATE_STEP_FROM_INSTRUCTION_TEMPLATE,
    custom?.deleteInstructionTemplateStepFromInstructionTemplate?.options
  );

  const [
    getInstructionTemplateDetails,
    {
      data: getInstructionTemplateDetailsData,
      loading: getInstructionTemplateDetailsLoading,
    },
  ] = useLazyQuery(
    custom?.getInstructionTemplateDetails?.query ||
      GET_INSTRUCTION_TEMPLATE_DETAILS,
    custom?.getInstructionTemplateDetails?.options
  );

  const [
    executeInstructionTemplate,
    {
      data: executeInstructionTemplateData,
      loading: executeInstructionTemplateLoading,
    },
  ] = useMutation(
    custom?.executeInstructionTemplate?.mutation ||
      EXECUTE_INSTRUCTION_TEMPLATE,
    custom?.executeInstructionTemplate?.options
  );

  const [
    saveInstructionExecution,
    {
      data: saveInstructionExecutionData,
      loading: saveInstructionExecutionLoading,
    },
  ] = useMutation(
    custom?.saveInstructionExecution?.mutation || SAVE_INSTRUCTION_EXECUTION,
    custom?.saveInstructionExecution?.options
  );

  const [
    submitInstructionExecutionStep,
    {
      data: submitInstructionExecutionStepData,
      loading: submitInstructionExecutionStepLoading,
    },
  ] = useMutation(
    custom?.submitInstructionExecutionStep?.mutation ||
      SUBMIT_INSTRUCTION_EXECUTION_STEP,
    custom?.submitInstructionExecutionStep?.options
  );

  const [
    getInstructionExecutionDetails,
    {
      data: getInstructionExecutionDetailsData,
      loading: getInstructionExecutionDetailsLoading,
    },
  ] = useLazyQuery(
    custom?.getInstructionExecutionDetails?.query ||
      GET_INSTRUCTION_EXECUTION_DETAILS,
    custom?.getInstructionExecutionDetails?.options
  );

  const [
    getInstructionExecutionsByTrigger,
    {
      data: getInstructionExecutionsByTriggerData,
      loading: getInstructionExecutionsByTriggerLoading,
      fetchMore: getInstructionExecutionsByTriggerFetchMore,
    },
  ] = useLazyQuery(
    custom?.getInstructionExecutionsByTrigger?.query ||
      GET_INSTRUCTION_EXECUTIONS_BY_TRIGGER,
    custom?.getInstructionExecutionsByTrigger?.options
  );

  const [
    getInstructionExecutionsByEventId,
    {
      data: getInstructionExecutionsByEventIdData,
      loading: getInstructionExecutionsByEventIdLoading,
      fetchMore: getInstructionExecutionsByEventIdFetchMore,
    },
  ] = useLazyQuery(
    custom?.getInstructionExecutionsByEventId?.query ||
      GET_INSTRUCTION_EXECUTIONS_BY_EVENT_ID,
    custom?.getInstructionExecutionsByEventId?.options
  );

  const [
    getInstructionExecutionsByExecutorId,
    {
      data: getInstructionExecutionsByExecutorIdData,
      loading: getInstructionExecutionsByExecutorIdLoading,
      fetchMore: getInstructionExecutionsByExecutorIdFetchMore,
    },
  ] = useLazyQuery(
    custom?.getInstructionExecutionsByExecutorId?.query ||
      GET_INSTRUCTION_EXECUTIONS_BY_EXECUTOR_ID,
    custom?.getInstructionExecutionsByExecutorId?.options
  );

  const [
    getInstructionExecutionsByInstructionTemplateId,
    {
      data: getInstructionExecutionsByInstructionTemplateIdData,
      loading: getInstructionExecutionsByInstructionTemplateIdLoading,
      fetchMore: getInstructionExecutionsByInstructionTemplateIdFetchMore,
    },
  ] = useLazyQuery(
    custom?.getInstructionExecutionsByInstructionTemplateId?.query ||
      GET_INSTRUCTION_EXECUTIONS_BY_INSTRUCTION_TEMPLATE_ID,
    custom?.getInstructionExecutionsByInstructionTemplateId?.options
  );

  return {
    getInstructionTemplate: {
      query: getInstructionTemplate,
      data: getInstructionTemplateData,
      loading: getInstructionTemplateLoading,
    },
    getInstructionTemplateDetails: {
      query: getInstructionTemplateDetails,
      data: getInstructionTemplateDetailsData,
      loading: getInstructionTemplateDetailsLoading,
    },
    getInstructionTemplates: {
      query: getInstructionTemplates,
      data: getInstructionTemplatesData,
      fetchMore: getInstructionTemplatesFetchMore,
      loading: getInstructionTemplatesLoading,
    },
    createInstructionTemplate: {
      mutation: createInstructionTemplate,
      data: createInstructionTemplateData,
      loading: createInstructionTemplateLoading,
    },
    saveInstructionTemplate: {
      mutation: saveInstructionTemplate,
      data: saveInstructionTemplateData,
      loading: saveInstructionTemplateLoading,
    },
    addInstructionTemplateStepToInstructionTemplate: {
      mutation: addInstructionTemplateStepToInstructionTemplate,
      data: addInstructionTemplateStepToInstructionTemplateData,
      loading: addInstructionTemplateStepToInstructionTemplateLoading,
    },
    saveInstructionTemplateStep: {
      mutation: saveInstructionTemplateStep,
      data: saveInstructionTemplateStepData,
      loading: saveInstructionTemplateStepLoading,
    },
    deleteInstructionTemplateStepFromInstructionTemplate: {
      mutation: deleteInstructionTemplateStepFromInstructionTemplate,
      data: deleteInstructionTemplateStepFromInstructionTemplateData,
      loading: deleteInstructionTemplateStepFromInstructionTemplateLoading,
    },
    getInstructionExecutionDetails: {
      query: getInstructionExecutionDetails,
      data: getInstructionExecutionDetailsData,
      loading: getInstructionExecutionDetailsLoading,
    },
    getInstructionExecutionsByExecutorId: {
      query: getInstructionExecutionsByExecutorId,
      data: getInstructionExecutionsByExecutorIdData,
      loading: getInstructionExecutionsByExecutorIdLoading,
      fetchMore: getInstructionExecutionsByExecutorIdFetchMore,
    },
    getInstructionExecutionsByInstructionTemplateId: {
      query: getInstructionExecutionsByInstructionTemplateId,
      data: getInstructionExecutionsByInstructionTemplateIdData,
      loading: getInstructionExecutionsByInstructionTemplateIdLoading,
      fetchMore: getInstructionExecutionsByInstructionTemplateIdFetchMore,
    },
    getInstructionExecutionsByTrigger: {
      query: getInstructionExecutionsByTrigger,
      data: getInstructionExecutionsByTriggerData,
      loading: getInstructionExecutionsByTriggerLoading,
      fetchMore: getInstructionExecutionsByTriggerFetchMore,
    },
    getInstructionExecutionsByEventId: {
      query: getInstructionExecutionsByEventId,
      data: getInstructionExecutionsByEventIdData,
      loading: getInstructionExecutionsByEventIdLoading,
      fetchMore: getInstructionExecutionsByEventIdFetchMore,
    },
    executeInstructionTemplate: {
      mutation: executeInstructionTemplate,
      data: executeInstructionTemplateData,
      loading: executeInstructionTemplateLoading,
    },
    saveInstructionExecution: {
      mutation: saveInstructionExecution,
      data: saveInstructionExecutionData,
      loading: saveInstructionExecutionLoading,
    },
    submitInstructionExecutionStep: {
      mutation: submitInstructionExecutionStep,
      data: submitInstructionExecutionStepData,
      loading: submitInstructionExecutionStepLoading,
    },
    ...moreApi,
  };
};

export const useInstructionApi2 = (custom?: InstructionTemplateApi) => {
  const [
    createInstructionSubject,
    {
      data: createInstructionSubjectData,
      loading: createInstructionSubjectLoading,
    },
  ] = useMutation(
    custom?.createInstructionSubject?.mutation || CREATE_INSTRUCTION_SUBJECT,
    custom?.createInstructionSubject?.options
  );

  const [
    saveInstructionSubject,
    {
      data: saveInstructionSubjectData,
      loading: saveInstructionSubjectLoading,
    },
  ] = useMutation(
    custom?.saveInstructionSubject?.mutation || SAVE_INSTRUCTION_SUBJECT,
    custom?.saveInstructionSubject?.options
  );

  const [
    deleteInstructionSubject,
    {
      data: deleteInstructionSubjectData,
      loading: deleteInstructionSubjectLoading,
    },
  ] = useMutation(
    custom?.deleteInstructionSubject?.mutation || DELETE_INSTRUCTION_SUBJECT,
    custom?.deleteInstructionSubject?.options
  );

  const [
    getInstructionSubjectsBySubject,
    {
      data: getInstructionSubjectsBySubjectData,
      loading: getInstructionSubjectsBySubjectLoading,
      fetchMore: getInstructionSubjectsBySubjectFetchMore,
    },
  ] = useLazyQuery(
    custom?.getInstructionSubjectsBySubject?.query ||
      GET_INSTRUCTION_SUBJECTS_BY_SUBJECT,
    custom?.getInstructionSubjectsBySubject?.options
  );

  const [
    getInstructionSubjectsByTemplate,
    {
      data: getInstructionSubjectsByTemplateData,
      loading: getInstructionSubjectsByTemplateLoading,
      fetchMore: getInstructionSubjectsByTemplateFetchMore,
    },
  ] = useLazyQuery(
    custom?.getInstructionSubjectsByTemplate?.query ||
      GET_INSTRUCTION_SUBJECTS_BY_TEMPLATE,
    custom?.getInstructionSubjectsByTemplate?.options
  );

  return {
    createInstructionSubject: {
      mutation: createInstructionSubject,
      data: createInstructionSubjectData,
      loading: createInstructionSubjectLoading,
    },
    saveInstructionSubject: {
      mutation: saveInstructionSubject,
      data: saveInstructionSubjectData,
      loading: saveInstructionSubjectLoading,
    },
    deleteInstructionSubject: {
      mutation: deleteInstructionSubject,
      data: deleteInstructionSubjectData,
      loading: deleteInstructionSubjectLoading,
    },
    getInstructionSubjectsBySubject: {
      query: getInstructionSubjectsBySubject,
      data: getInstructionSubjectsBySubjectData,
      loading: getInstructionSubjectsBySubjectLoading,
      fetchMore: getInstructionSubjectsBySubjectFetchMore,
    },
    getInstructionSubjectsByTemplate: {
      query: getInstructionSubjectsByTemplate,
      data: getInstructionSubjectsByTemplateData,
      loading: getInstructionSubjectsByTemplateLoading,
      fetchMore: getInstructionSubjectsByTemplateFetchMore,
    },
  };
};

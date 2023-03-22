import { gql } from "@apollo/client";
import {
  INSTRUCTION_EXECUTION_DETAILS_FRAGMENT,
  INSTRUCTION_EXECUTION_FRAGMENT,
  INSTRUCTION_EXECUTION_STEP_SUBMISSION_FRAGMENT,
  INSTRUCTION_SUBJECT_FRAGMENT,
  INSTRUCTION_TEMPLATE_DETAILS_FRAGMENT,
  INSTRUCTION_TEMPLATE_FRAGMENT,
  INSTRUCTION_TEMPLATE_STEP_FRAGMENT,
} from "./fragments";

export const GET_INSTRUCTION_TEMPLATE = gql`
  ${INSTRUCTION_TEMPLATE_FRAGMENT}
  query getInstructionTemplate($id: String!) {
    getInstructionTemplate(id: $id) {
      ...InstructionTemplate
    }
  }
`;

export const GET_INSTRUCTION_TEMPLATES = gql`
  ${INSTRUCTION_TEMPLATE_FRAGMENT}
  query getInstructionTemplates {
    getInstructionTemplates {
      cursor
      items {
        ...InstructionTemplate
      }
    }
  }
`;

export const CREATE_INSTRUCTION_TEMPLATE = gql`
  ${INSTRUCTION_TEMPLATE_FRAGMENT}
  mutation createInstructionTemplate($data: InstructionTemplateInput!) {
    createInstructionTemplate(data: $data) {
      ...InstructionTemplate
    }
  }
`;

export const SAVE_INSTRUCTION_TEMPLATE = gql`
  ${INSTRUCTION_TEMPLATE_FRAGMENT}
  mutation saveInstructionTemplate($data: InstructionTemplateUpdateInput!) {
    saveInstructionTemplate(data: $data) {
      ...InstructionTemplate
    }
  }
`;

export const ADD_INSTRUCTION_TEMPLATE_STEP_TO_INSTRUCTION_TEMPLATE = gql`
  ${INSTRUCTION_TEMPLATE_STEP_FRAGMENT}
  mutation addInstructionTemplateStepToInstructionTemplate(
    $data: AddInstructionTemplateStepToInstructionTemplateInput!
  ) {
    addInstructionTemplateStepToInstructionTemplate(data: $data) {
      ...InstructionTemplateStep
    }
  }
`;

export const SAVE_INSTRUCTION_TEMPLATE_STEP = gql`
  ${INSTRUCTION_TEMPLATE_STEP_FRAGMENT}
  mutation saveInstructionTemplateStep(
    $data: UpdateInstructionTemplateStepInput!
  ) {
    saveInstructionTemplateStep(data: $data) {
      ...InstructionTemplateStep
    }
  }
`;

export const DELETE_INSTRUCTION_TEMPLATE_STEP_FROM_INSTRUCTION_TEMPLATE = gql`
  ${INSTRUCTION_TEMPLATE_STEP_FRAGMENT}
  mutation deleteInstructionTemplateStepFromInstructionTemplate(
    $data: DeleteInstructionTemplateStepFromInstructionTemplateInput!
  ) {
    deleteInstructionTemplateStepFromInstructionTemplate(data: $data) {
      ...InstructionTemplateStep
    }
  }
`;

export const GET_INSTRUCTION_TEMPLATE_DETAILS = gql`
  ${INSTRUCTION_TEMPLATE_DETAILS_FRAGMENT}
  query getInstructionTemplateDetails($id: String!) {
    getInstructionTemplateDetails(id: $id) {
      ...InstructionTemplateDetails
    }
  }
`;

export const EXECUTE_INSTRUCTION_TEMPLATE = gql`
  ${INSTRUCTION_EXECUTION_FRAGMENT}
  mutation executeInstructionTemplate($data: ExecuteInstructionTemplateInput!) {
    executeInstructionTemplate(data: $data) {
      ...InstructionExecution
    }
  }
`;

export const SAVE_INSTRUCTION_EXECUTION = gql`
  ${INSTRUCTION_EXECUTION_FRAGMENT}
  mutation saveInstructionExecution($data: InstructionExecutionUpdateInput!) {
    saveInstructionExecution(data: $data) {
      ...InstructionExecution
    }
  }
`;

export const SUBMIT_INSTRUCTION_EXECUTION_STEP = gql`
  ${INSTRUCTION_EXECUTION_STEP_SUBMISSION_FRAGMENT}
  mutation submitInstructionExecutionStep(
    $data: SubmitInstructionExecutionStepInput!
  ) {
    submitInstructionExecutionStep(data: $data) {
      ...InstructionExecutionStepSubmission
    }
  }
`;

export const GET_INSTRUCTION_EXECUTION_DETAILS = gql`
  ${INSTRUCTION_EXECUTION_DETAILS_FRAGMENT}
  query getInstructionExecutionDetails($id: String!) {
    getInstructionExecutionDetails(id: $id) {
      ...InstructionExecutionDetails
    }
  }
`;

export const GET_INSTRUCTION_EXECUTIONS_BY_EXECUTOR_ID = gql`
  ${INSTRUCTION_EXECUTION_FRAGMENT}
  query getInstructionExecutionsByExecutorId(
    $executorId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getInstructionExecutionsByExecutorId(
      executorId: $executorId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...InstructionExecution
      }
    }
  }
`;

export const GET_INSTRUCTION_EXECUTIONS_BY_EVENT_ID = gql`
  ${INSTRUCTION_EXECUTION_FRAGMENT}
  query getInstructionExecutionsByEventId(
    $eventId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getInstructionExecutionsByEventId(
      eventId: $eventId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...InstructionExecution
      }
    }
  }
`;

export const GET_INSTRUCTION_EXECUTIONS_BY_TRIGGER = gql`
  ${INSTRUCTION_EXECUTION_FRAGMENT}
  query getInstructionExecutionsByTrigger(
    $triggerSource: String!
    $triggerSourceId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getInstructionExecutionsByTrigger(
      triggerSource: $triggerSource
      triggerSourceId: $triggerSourceId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...InstructionExecution
      }
    }
  }
`;

export const GET_INSTRUCTION_EXECUTIONS_BY_INSTRUCTION_TEMPLATE_ID = gql`
  ${INSTRUCTION_EXECUTION_FRAGMENT}
  query getInstructionExecutionsByInstructionTemplateId(
    $instructionTemplateId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getInstructionExecutionsByInstructionTemplateId(
      instructionTemplateId: $instructionTemplateId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...InstructionExecution
      }
    }
  }
`;

export const CREATE_INSTRUCTION_SUBJECT = gql`
  ${INSTRUCTION_SUBJECT_FRAGMENT}
  mutation createInstructionSubject($data: InstructionSubjectInput!) {
    createInstructionSubject(data: $data) {
      ...InstructionSubject
    }
  }
`;

export const SAVE_INSTRUCTION_SUBJECT = gql`
  ${INSTRUCTION_SUBJECT_FRAGMENT}
  mutation saveInstructionSubject($data: UpdateInstructionSubjectInput!) {
    saveInstructionSubject(data: $data) {
      ...InstructionSubject
    }
  }
`;

export const DELETE_INSTRUCTION_SUBJECT = gql`
  ${INSTRUCTION_SUBJECT_FRAGMENT}
  mutation deleteInstructionSubject($data: DeleteInstructionSubjectInput!) {
    deleteInstructionSubject(data: $data) {
      ...InstructionSubject
    }
  }
`;

export const GET_INSTRUCTION_SUBJECTS_BY_SUBJECT = gql`
  ${INSTRUCTION_SUBJECT_FRAGMENT}
  query getInstructionSubjectsBySubject(
    $subjectType: String!
    $subjectId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getInstructionSubjectsBySubject(
      subjectType: $subjectType
      subjectId: $subjectId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...InstructionSubject
      }
    }
  }
`;

export const GET_INSTRUCTION_SUBJECTS_BY_TEMPLATE = gql`
  ${INSTRUCTION_SUBJECT_FRAGMENT}
  query getInstructionSubjectsByTemplate(
    $instructionTemplateId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getInstructionSubjectsByTemplate(
      instructionTemplateId: $instructionTemplateId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...InstructionSubject
      }
    }
  }
`;

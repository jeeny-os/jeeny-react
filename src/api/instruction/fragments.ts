import { gql } from "@apollo/client";

export const INSTRUCTION_TEMPLATE_FRAGMENT = gql`
  fragment InstructionTemplate on InstructionTemplate {
    id
    name
    status
    description
    companyId
    createdOn
    updatedOn
    createdBy
  }
`;

export const INSTRUCTION_TEMPLATE_STEP_FRAGMENT = gql`
  fragment InstructionTemplateStep on InstructionTemplateStep {
    id
    instructionTemplateId
    name
    companyId
    content
    weight
    createdOn
    updatedOn
  }
`;

export const INSTRUCTION_TEMPLATE_DETAILS_FRAGMENT = gql`
  fragment InstructionTemplateDetails on InstructionTemplateDetails {
    instructionTemplate {
      ...InstructionTemplate
    }
    instructionTemplateSteps {
      ...InstructionTemplateStep
    }
  }
  ${INSTRUCTION_TEMPLATE_FRAGMENT}
  ${INSTRUCTION_TEMPLATE_STEP_FRAGMENT}
`;

export const INSTRUCTION_EXECUTION_FRAGMENT = gql`
  fragment InstructionExecution on InstructionExecution {
    id
    status
    name
    companyId
    createdOn
    updatedOn
    createdBy
    instructionTemplateId
    eventId
    executorId
    subjectType
    subjectId
    triggerSource
    triggerSourceId
  }
`;

export const INSTRUCTION_EXECUTION_STEP_FRAGMENT = gql`
  fragment InstructionExecutionStep on InstructionExecutionStep {
    id
    instructionExecutionId
    instructionTemplateId
    name
    companyId
    content
    weight
    createdOn
    updatedOn
  }
`;

export const INSTRUCTION_EXECUTION_STEP_SUBMISSION_FRAGMENT = gql`
  fragment InstructionExecutionStepSubmission on InstructionExecutionStepSubmission {
    id
    companyId
    instructionExecutionId
    instructionExecutionStepId
    submission
    createdOn
  }
`;

export const INSTRUCTION_SUBJECT_TRIGGER_FRAGMENT = gql`
  fragment InstructionSubjectTrigger on InstructionSubjectTrigger {
    isRequired
    source
  }
`;

export const INSTRUCTION_SUBJECT_FRAGMENT = gql`
  fragment InstructionSubject on InstructionSubject {
    companyId
    name
    status
    subjectType
    subjectId
    instructionTemplateId
    triggers {
      ...InstructionSubjectTrigger
    }
    createdOn
    createdBy
  }
  ${INSTRUCTION_SUBJECT_TRIGGER_FRAGMENT}
`;

export const INSTRUCTION_EXECUTION_DETAILS_FRAGMENT = gql`
  fragment InstructionExecutionDetails on InstructionExecutionDetails {
    instructionExecution {
      ...InstructionExecution
    }
    instructionExecutionSteps {
      ...InstructionExecutionStep
    }
    instructionExecutionStepSubmissions {
      ...InstructionExecutionStepSubmission
    }
  }
  ${INSTRUCTION_EXECUTION_FRAGMENT}
  ${INSTRUCTION_EXECUTION_STEP_FRAGMENT}
  ${INSTRUCTION_EXECUTION_STEP_SUBMISSION_FRAGMENT}
`;

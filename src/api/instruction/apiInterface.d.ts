import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateInstructionTemplateArgs,
  MutationSaveInstructionTemplateArgs,
  QueryGetInstructionTemplateArgs,
  InstructionTemplate,
  InstructionTemplateQueryResponse,
  MutationAddInstructionTemplateStepToInstructionTemplateArgs,
  InstructionTemplateStep,
  MutationSaveInstructionTemplateStepArgs,
  MutationDeleteInstructionTemplateStepFromInstructionTemplateArgs,
  InstructionTemplateDetails,
  QueryGetInstructionTemplateDetailsArgs,
  InstructionExecution,
  MutationExecuteInstructionTemplateArgs,
  InstructionExecutionStepSubmission,
  MutationSubmitInstructionExecutionStepArgs,
  QueryGetInstructionExecutionDetailsArgs,
  InstructionExecutionDetails,
  QueryGetInstructionExecutionsByExecutorIdArgs,
  InstructionExecutionQueryResponse,
  QueryGetInstructionExecutionsByInstructionTemplateIdArgs,
  QueryGetInstructionExecutionsByTriggerArgs,
  QueryGetInstructionExecutionsByEventIdArgs,
  MutationCreateInstructionSubjectArgs,
  MutationSaveInstructionSubjectArgs,
  MutationDeleteInstructionSubjectArgs,
  InstructionSubjectQueryResponse,
  InstructionSubject,
  QueryGetInstructionSubjectsBySubjectArgs,
  QueryGetInstructionSubjectsByTemplateArgs,
  MutationSaveInstructionExecutionArgs,
} from "../../types/graphql";

export interface InstructionTemplateApi {
  getInstructionTemplate?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstructionTemplate: InstructionTemplate;
      },
      QueryGetInstructionTemplateArgs
    >;
  };

  getInstructionTemplateDetails?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstructionTemplateDetails: InstructionTemplateDetails;
      },
      QueryGetInstructionTemplateDetailsArgs
    >;
  };

  getInstructionTemplates?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<{
      getInstructionTemplates: InstructionTemplateQueryResponse;
    }>;
  };

  createInstructionTemplate?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createInstructionTemplate: InstructionTemplate;
      },
      MutationCreateInstructionTemplateArgs
    >;
  };

  saveInstructionTemplate?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveInstructionTemplate: InstructionTemplate;
      },
      MutationSaveInstructionTemplateArgs
    >;
  };

  addInstructionTemplateStepToInstructionTemplate?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        addInstructionTemplateStepToInstructionTemplate: InstructionTemplateStep;
      },
      MutationAddInstructionTemplateStepToInstructionTemplateArgs
    >;
  };

  saveInstructionTemplateStep?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveInstructionTemplateStep: InstructionTemplateStep;
      },
      MutationSaveInstructionTemplateStepArgs
    >;
  };

  deleteInstructionTemplateStepFromInstructionTemplate?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteInstructionTemplateStepFromInstructionTemplate: InstructionTemplateStep;
      },
      MutationDeleteInstructionTemplateStepFromInstructionTemplateArgs
    >;
  };

  getInstructionExecutionDetails?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstructionExecutionDetails: InstructionExecutionDetails;
      },
      QueryGetInstructionExecutionDetailsArgs
    >;
  };

  getInstructionExecutionsByExecutorId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstructionExecutionsByExecutorId: InstructionExecutionQueryResponse;
      },
      QueryGetInstructionExecutionsByExecutorIdArgs
    >;
  };

  getInstructionExecutionsByTrigger?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstructionExecutionsByTrigger: InstructionExecutionQueryResponse;
      },
      QueryGetInstructionExecutionsByTriggerArgs
    >;
  };

  getInstructionExecutionsByEventId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstructionExecutionsByEventId: InstructionExecutionQueryResponse;
      },
      QueryGetInstructionExecutionsByEventIdArgs
    >;
  };

  getInstructionExecutionsByInstructionTemplateId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstructionExecutionsByInstructionTemplateId: InstructionExecutionQueryResponse;
      },
      QueryGetInstructionExecutionsByInstructionTemplateIdArgs
    >;
  };

  saveInstructionExecution?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveInstructionExecution: InstructionExecution;
      },
      MutationSaveInstructionExecutionArgs
    >;
  };

  executeInstructionTemplate?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        executeInstructionTemplate: InstructionExecution;
      },
      MutationExecuteInstructionTemplateArgs
    >;
  };

  submitInstructionExecutionStep?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        submitInstructionExecutionStep: InstructionExecutionStepSubmission;
      },
      MutationSubmitInstructionExecutionStepArgs
    >;
  };

  createInstructionSubject?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createInstructionSubject: InstructionSubject;
      },
      MutationCreateInstructionSubjectArgs
    >;
  };

  saveInstructionSubject?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveInstructionSubject: InstructionSubject;
      },
      MutationSaveInstructionSubjectArgs
    >;
  };

  deleteInstructionSubject?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteInstructionSubject: InstructionSubject;
      },
      MutationDeleteInstructionSubjectArgs
    >;
  };

  getInstructionSubjectsBySubject?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstructionSubjectsBySubject: InstructionSubjectQueryResponse;
      },
      QueryGetInstructionSubjectsBySubjectArgs
    >;
  };

  getInstructionSubjectsByTemplate?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstructionSubjectsByTemplate: InstructionSubjectQueryResponse;
      },
      QueryGetInstructionSubjectsByTemplateArgs
    >;
  };
}

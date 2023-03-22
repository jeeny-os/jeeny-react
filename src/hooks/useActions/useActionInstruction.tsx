import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { InstructionActionInputs } from "../../types/actionInputs";
import { useInstructionApi } from "../../api";

export const useActionInstruction = () => {
  const {
    createInstructionTemplate: { mutation: createInstructionTemplate },
    saveInstructionTemplate: { mutation: saveInstructionTemplate },
    addInstructionTemplateStepToInstructionTemplate: {
      mutation: addInstructionTemplateStepToInstructionTemplate,
    },
    saveInstructionTemplateStep: { mutation: saveInstructionTemplateStep },
    deleteInstructionTemplateStepFromInstructionTemplate: {
      mutation: deleteInstructionTemplateStepFromInstructionTemplate,
    },
    executeInstructionTemplate: { mutation: executeInstructionTemplate },
    saveInstructionExecution: { mutation: saveInstructionExecution },
    submitInstructionExecutionStep: {
      mutation: submitInstructionExecutionStep,
    },
    createInstructionSubject: { mutation: createInstructionSubject },
    saveInstructionSubject: { mutation: saveInstructionSubject },
    deleteInstructionSubject: { mutation: deleteInstructionSubject },
  } = useInstructionApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<InstructionActionInputs>) => {
    switch (action) {
      case "instruction.createInstructionTemplate": {
        return await createInstructionTemplate({
          variables: { data: values as JeenyTypes.InstructionTemplateInput },
        });
      }

      case "instruction.saveInstructionTemplate": {
        return await saveInstructionTemplate({
          variables: {
            data: values as JeenyTypes.InstructionTemplateUpdateInput,
          },
        });
      }

      case "instruction.addInstructionTemplateStepToInstructionTemplate": {
        return await addInstructionTemplateStepToInstructionTemplate({
          variables: {
            data: values as JeenyTypes.AddInstructionTemplateStepToInstructionTemplateInput,
          },
        });
      }

      case "instruction.saveInstructionTemplateStep": {
        return await saveInstructionTemplateStep({
          variables: {
            data: values as JeenyTypes.UpdateInstructionTemplateStepInput,
          },
        });
      }

      case "instruction.deleteInstructionTemplateStepFromInstructionTemplate": {
        return await deleteInstructionTemplateStepFromInstructionTemplate({
          variables: {
            data: values as JeenyTypes.DeleteInstructionTemplateStepFromInstructionTemplateInput,
          },
        });
      }

      case "instruction.executeInstructionTemplate": {
        return await executeInstructionTemplate({
          variables: {
            data: values as JeenyTypes.ExecuteInstructionTemplateInput,
          },
        });
      }

      case "instruction.saveInstructionExecution": {
        return await saveInstructionExecution({
          variables: {
            data: values as JeenyTypes.InstructionExecutionUpdateInput,
          },
        });
      }

      case "instruction.submitInstructionExecutionStep": {
        return await submitInstructionExecutionStep({
          variables: {
            data: values as JeenyTypes.SubmitInstructionExecutionStepInput,
          },
        });
      }

      case "instruction.createInstructionSubject": {
        return await createInstructionSubject({
          variables: { data: values as JeenyTypes.InstructionSubjectInput },
        });
      }

      case "instruction.saveInstructionSubject": {
        return await saveInstructionSubject({
          variables: {
            data: values as JeenyTypes.UpdateInstructionSubjectInput,
          },
        });
      }
      case "instruction.deleteInstructionSubject": {
        return await deleteInstructionSubject({
          variables: {
            data: values as JeenyTypes.DeleteInstructionSubjectInput,
          },
        });
      }
    }
  };

  return submit;
};

import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { KitActionInputs } from "../../types/actionInputs";
import { useKitApi } from "../../api";

export const useActionKit = () => {
  const {
    createKitTemplate: { mutation: createKitTemplate },
    saveKitTemplate: { mutation: saveKitTemplate },
    addKitTemplatePartToKitTemplate: {
      mutation: addKitTemplatePartToKitTemplate,
    },
    saveKitTemplatePart: { mutation: saveKitTemplatePart },
    deleteKitTemplatePartFromKitTemplate: {
      mutation: deleteKitTemplatePartFromKitTemplate,
    },
    addKitTemplatePartOptionToKitTemplatePart: {
      mutation: addKitTemplatePartOptionToKitTemplatePart,
    },
    setDefaultKitTemplatePartOption: {
      mutation: setDefaultKitTemplatePartOption,
    },
    deleteKitTemplatePartOptionFromKitTemplatePart: {
      mutation: deleteKitTemplatePartOptionFromKitTemplatePart,
    },
  } = useKitApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<KitActionInputs>) => {
    switch (action) {
      case "kit.createKitTemplate": {
        return await createKitTemplate({
          variables: { data: values as JeenyTypes.CreateKitTemplateInput },
        });
      }

      case "kit.saveKitTemplate": {
        return await saveKitTemplate({
          variables: { data: values as JeenyTypes.UpdateKitTemplateInput },
        });
      }

      case "kit.addKitTemplatePartToKitTemplate": {
        return await addKitTemplatePartToKitTemplate({
          variables: {
            data: values as JeenyTypes.AddKitTemplatePartToKitTemplateInput,
          },
        });
      }

      case "kit.addKitTemplatePartOptionToKitTemplatePart": {
        return await addKitTemplatePartOptionToKitTemplatePart({
          variables: {
            data: values as JeenyTypes.AddKitTemplatePartOptionToKitTemplatePartInput,
          },
        });
      }

      case "kit.saveKitTemplatePart": {
        return await saveKitTemplatePart({
          variables: { data: values as JeenyTypes.UpdateKitTemplatePartInput },
        });
      }

      case "kit.setDefaultKitTemplatePartOption": {
        return await setDefaultKitTemplatePartOption({
          variables: {
            data: values as JeenyTypes.SetDefaultKitTemplatePartOptionInput,
          },
        });
      }

      case "kit.deleteKitTemplatePartFromKitTemplate": {
        return await deleteKitTemplatePartFromKitTemplate({
          variables: {
            data: values as JeenyTypes.DeleteKitTemplatePartFromKitTemplateInput,
          },
        });
      }

      case "kit.deleteKitTemplatePartOptionFromKitTemplatePart": {
        return await deleteKitTemplatePartOptionFromKitTemplatePart({
          variables: {
            data: values as JeenyTypes.DeleteKitTemplatePartOptionFromKitTemplatePartInput,
          },
        });
      }
    }
  };

  return submit;
};

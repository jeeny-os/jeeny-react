import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { TeamActionInputs } from "../../types/actionInputs";
import { useTeamApi } from "../../api";

export const useActionTeam = () => {
  const {
    createTeam: { mutation: createTeam },
    saveTeam: { mutation: saveTeam },
  } = useTeamApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<TeamActionInputs>) => {
    switch (action) {
      case "team.createTeam": {
        return await createTeam({
          variables: { data: values as JeenyTypes.TeamInput },
        });
      }

      case "team.saveTeam": {
        return await saveTeam({
          variables: { data: values as JeenyTypes.TeamInputUpdate },
        });
      }
    }
  };

  return submit;
};

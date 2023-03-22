import {
  DocumentNode,
  QueryFunctionOptions,
  MutationFunctionOptions,
} from "@apollo/client";
import {
  QueryGetTeamArgs,
  Team,
  TeamQueryResponse,
  QueryGetTeamsArgs,
  MutationSaveTeamArgs,
  QueryGetTeamDetailsArgs,
  TeamDetails,
} from "../../types/graphql";

export interface TeamApi {
  getTeam?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getTeam: Team;
      },
      QueryGetTeamArgs
    >;
  };

  getTeamDetails?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getTeamDetails: TeamDetails;
      },
      QueryGetTeamDetailsArgs
    >;
  };

  getTeams?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getTeams: TeamQueryResponse;
      },
      QueryGetTeamsArgs
    >;
  };

  createTeam?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createTeam: Team;
      },
      MutationCreateTeamArgs
    >;
  };

  saveTeam?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveTeam: Team;
      },
      MutationSaveTeamArgs
    >;
  };
}

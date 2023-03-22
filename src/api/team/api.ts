import { useLazyQuery, useMutation } from "@apollo/client";
import { TeamApi } from "./apiInterface";
import {
  CREATE_TEAM,
  GET_TEAM,
  GET_TEAMS,
  GET_TEAM_DETAILS,
  SAVE_TEAM,
} from "./gql";

export const useTeamApi = (custom?: TeamApi) => {
  const [getTeam, { data: getTeamData, loading: getTeamLoading }] =
    useLazyQuery(custom?.getTeam?.query || GET_TEAM, custom?.getTeam?.options);

  const [
    getTeamDetails,
    { data: getTeamDetailsData, loading: getTeamDetailsLoading },
  ] = useLazyQuery(
    custom?.getTeamDetails?.query || GET_TEAM_DETAILS,
    custom?.getTeamDetails?.options
  );

  const [
    getTeams,
    {
      data: getTeamsData,
      loading: getTeamsLoading,
      fetchMore: getTeamsFetchMore,
    },
  ] = useLazyQuery(
    custom?.getTeams?.query || GET_TEAMS,
    custom?.getTeams?.options
  );

  const [createTeam, { data: createTeamData, loading: createTeamLoading }] =
    useMutation(
      custom?.createTeam?.mutation || CREATE_TEAM,
      custom?.createTeam?.options
    );

  const [saveTeam, { data: saveTeamData, loading: saveTeamLoading }] =
    useMutation(
      custom?.saveTeam?.mutation || SAVE_TEAM,
      custom?.saveTeam?.options
    );

  return {
    getTeam: {
      query: getTeam,
      data: getTeamData,
      loading: getTeamLoading,
    },
    getTeamDetails: {
      query: getTeamDetails,
      data: getTeamDetailsData,
      loading: getTeamDetailsLoading,
    },
    getTeams: {
      query: getTeams,
      data: getTeamsData,
      loading: getTeamsLoading,
      fetchMore: getTeamsFetchMore,
    },
    createTeam: {
      mutation: createTeam,
      data: createTeamData,
      loading: createTeamLoading,
    },
    saveTeam: {
      mutation: saveTeam,
      data: saveTeamData,
      loading: saveTeamLoading,
    },
  };
};

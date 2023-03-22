import { gql } from "@apollo/client";
import { TEAM_DETAILS_FRAGMENT, TEAM_FRAGMENT } from "./fragments";

export const GET_TEAM = gql`
  ${TEAM_FRAGMENT}
  query getTeam($id: String!) {
    getTeam(id: $id) {
      ...Team
    }
  }
`;

export const GET_TEAM_DETAILS = gql`
  ${TEAM_DETAILS_FRAGMENT}
  query getTeamDetails($teamId: String!) {
    getTeamDetails(teamId: $teamId) {
      ...TeamDetails
    }
  }
`;

export const GET_TEAMS = gql`
  ${TEAM_FRAGMENT}
  query getTeams(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getTeams(limit: $limit, cursor: $cursor, filters: $filters) {
      cursor
      items {
        ...Team
      }
    }
  }
`;

export const CREATE_TEAM = gql`
  ${TEAM_FRAGMENT}
  mutation createTeam($data: TeamInput!) {
    createTeam(data: $data) {
      ...Team
    }
  }
`;

export const SAVE_TEAM = gql`
  ${TEAM_FRAGMENT}
  mutation saveTeam($data: TeamInputUpdate!) {
    saveTeam(data: $data) {
      ...Team
    }
  }
`;

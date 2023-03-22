import { gql } from "@apollo/client";
import { OPERATOR_FRAGMENT } from "../1init/fragments";
import { COMPANY_USER_FRAGMENT } from "../companyUser/fragments";

export const TEAM_FRAGMENT = gql`
  fragment Team on Team {
    id
    companyId
    name
    createdOn
    updatedOn
  }
`;

export const TEAM_DETAILS_FRAGMENT = gql`
  fragment TeamDetails on TeamDetails {
    team {
      ...Team
    }
    operators {
      ...Operator
    }
    companyUsers {
      ...CompanyUser
    }
  }
  ${TEAM_FRAGMENT}
  ${OPERATOR_FRAGMENT}
  ${COMPANY_USER_FRAGMENT}
`;

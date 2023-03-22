import { gql } from "@apollo/client";
import { COMPANY_FRAGMENT } from "./fragments";

export const GET_COMPANY = gql`
  ${COMPANY_FRAGMENT}
  query getCompany {
    getCompany {
      ...Company
    }
  }
`;

export const SAVE_COMPANY = gql`
  ${COMPANY_FRAGMENT}
  mutation saveCompany($data: CompanyInputUpdate!) {
    saveCompany(data: $data) {
      ...Company
    }
  }
`;

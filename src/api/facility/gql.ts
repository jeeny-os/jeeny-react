import { gql } from "@apollo/client";
import { FACILITY_DETAILS_FRAGMENT, FACILITY_FRAGMENT } from "./fragments";

export const GET_FACILITY = gql`
  ${FACILITY_FRAGMENT}
  query getFacility($id: String!) {
    getFacility(id: $id) {
      ...Facility
    }
  }
`;

export const GET_FACILITY_DETAILS = gql`
  ${FACILITY_DETAILS_FRAGMENT}
  query getFacilityDetails($id: String!) {
    getFacilityDetails(id: $id) {
      ...FacilityDetails
    }
  }
`;

export const GET_FACILITIES = gql`
  ${FACILITY_FRAGMENT}
  query getFacilities {
    getFacilities {
      cursor
      items {
        ...Facility
      }
    }
  }
`;

export const CREATE_FACILITY = gql`
  ${FACILITY_FRAGMENT}
  mutation createFacility($data: FacilityInput!) {
    createFacility(data: $data) {
      ...Facility
    }
  }
`;

export const SAVE_FACILITY = gql`
  ${FACILITY_FRAGMENT}
  mutation saveFacility($data: FacilityInputUpdate!) {
    saveFacility(data: $data) {
      ...Facility
    }
  }
`;

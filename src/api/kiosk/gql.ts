import { gql } from "@apollo/client";
import { KIOSK_FRAGMENT } from "./fragments";

export const GET_KIOSK = gql`
  ${KIOSK_FRAGMENT}
  query getKiosk($id: String!) {
    getKiosk(id: $id) {
      ...Kiosk
    }
  }
`;

export const GET_KIOSKS = gql`
  ${KIOSK_FRAGMENT}
  query getKiosks {
    getKiosks {
      cursor
      items {
        ...Kiosk
      }
    }
  }
`;

export const SAVE_KIOSK = gql`
  ${KIOSK_FRAGMENT}
  mutation saveKiosk($id: String!, $data: KioskUpdateInput!) {
    saveKiosk(id: $id, data: $data) {
      ...Kiosk
    }
  }
`;

export const DELETE_KIOSK = gql`
  ${KIOSK_FRAGMENT}
  mutation deleteKiosk($id: String!) {
    deleteKiosk(id: $id) {
      ...Kiosk
    }
  }
`;

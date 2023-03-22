import { gql } from "@apollo/client";

export const EVENT_FRAGMENT = gql`
  fragment Event on Event {
    id
    name
    description
    companyId
    assigneeId
    assigneeType
    instructionTemplateId
    instructionSubjectType
    instructionSubjectId
    recurrence
    date
    endDate
    type
    createdOn
    updatedOn
    createdBy
  }
`;

export const EVENTS_BETWEEN_DATES_FRAGMENT = gql`
  fragment EventsBetweenDates on EventsBetweenDates {
    singleEvents {
      ...Event
    }
    recurringEvents {
      ...Event
    }
  }
  ${EVENT_FRAGMENT}
`;

import { gql } from "@apollo/client";
import { EVENTS_BETWEEN_DATES_FRAGMENT, EVENT_FRAGMENT } from "./fragments";

export const GET_EVENT = gql`
  ${EVENT_FRAGMENT}
  query getEvent($id: String!) {
    getEvent(id: $id) {
      ...Event
    }
  }
`;

export const GET_EVENTS = gql`
  ${EVENTS_BETWEEN_DATES_FRAGMENT}
  query getEvents($fromDate: String!, $toDate: String!) {
    getEvents(fromDate: $fromDate, toDate: $toDate) {
      ...EventsBetweenDates
    }
  }
`;

export const GET_EVENTS_BY_ASSIGNEE_ID = gql`
  ${EVENTS_BETWEEN_DATES_FRAGMENT}
  query getEventsByAssigneeId(
    $assigneeId: String!
    $fromDate: String!
    $toDate: String!
  ) {
    getEventsByAssigneeId(
      assigneeId: $assigneeId
      fromDate: $fromDate
      toDate: $toDate
    ) {
      ...EventsBetweenDates
    }
  }
`;

export const CREATE_EVENT = gql`
  ${EVENT_FRAGMENT}
  mutation createEvent($data: EventInput!) {
    createEvent(data: $data) {
      ...Event
    }
  }
`;

export const SAVE_EVENT = gql`
  ${EVENT_FRAGMENT}
  mutation saveEvent($data: EventUpdateInput!) {
    saveEvent(data: $data) {
      ...Event
    }
  }
`;

export const DELETE_EVENT = gql`
  ${EVENT_FRAGMENT}
  mutation deleteEvent($id: String!) {
    deleteEvent(id: $id) {
      ...Event
    }
  }
`;

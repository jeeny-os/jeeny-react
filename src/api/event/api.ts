import { useLazyQuery, useMutation } from "@apollo/client";
import { EventApi } from "./apiInterface";
import {
  CREATE_EVENT,
  DELETE_EVENT,
  GET_EVENT,
  GET_EVENTS,
  GET_EVENTS_BY_ASSIGNEE_ID,
  SAVE_EVENT,
} from "./gql";

export const useEventApi = (custom?: EventApi) => {
  const [getEvent, { data: getEventData, loading: getEventLoading }] =
    useLazyQuery(
      custom?.getEvent?.query || GET_EVENT,
      custom?.getEvent?.options
    );

  const [
    getEvents,
    {
      data: getEventsData,
      loading: getEventsLoading,
      fetchMore: getEventsFetchMore,
    },
  ] = useLazyQuery(
    custom?.getEvents?.query || GET_EVENTS,
    custom?.getEvents?.options
  );

  const [
    getEventsByAssigneeId,
    { data: getEventsByAssigneeIdData, loading: getEventsByAssigneeIdLoading },
  ] = useLazyQuery(
    custom?.getEventsByAssigneeId?.query || GET_EVENTS_BY_ASSIGNEE_ID,
    custom?.getEventsByAssigneeId?.options
  );

  const [createEvent, { data: createEventData, loading: createEventLoading }] =
    useMutation(
      custom?.createEvent?.mutation || CREATE_EVENT,
      custom?.createEvent?.options
    );

  const [saveEvent, { data: saveEventData, loading: saveEventLoading }] =
    useMutation(
      custom?.saveEvent?.mutation || SAVE_EVENT,
      custom?.saveEvent?.options
    );

  const [deleteEvent, { data: deleteEventData, loading: deleteEventLoading }] =
    useMutation(
      custom?.deleteEvent?.mutation || DELETE_EVENT,
      custom?.deleteEvent?.options
    );

  return {
    getEvent: {
      query: getEvent,
      data: getEventData,
      loading: getEventLoading,
    },
    getEvents: {
      query: getEvents,
      data: getEventsData,
      fetchMore: getEventsFetchMore,
      loading: getEventsLoading,
    },
    getEventsByAssigneeId: {
      query: getEventsByAssigneeId,
      data: getEventsByAssigneeIdData,
      loading: getEventsByAssigneeIdLoading,
    },
    createEvent: {
      mutation: createEvent,
      data: createEventData,
      loading: createEventLoading,
    },
    saveEvent: {
      mutation: saveEvent,
      data: saveEventData,
      loading: saveEventLoading,
    },
    deleteEvent: {
      mutation: deleteEvent,
      data: deleteEventData,
      loading: deleteEventLoading,
    },
  };
};

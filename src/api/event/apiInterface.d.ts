import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateEventArgs,
  MutationSaveEventArgs,
  QueryGetEventArgs,
  Event,
  MutationDeleteEventArgs,
  QueryGetEventsByAssigneeIdArgs,
  EventsBetweenDates,
  QueryGetEventsArgs,
} from "../../types/graphql";

export interface EventApi {
  getEvent?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getEvent: Event;
      },
      QueryGetEventArgs
    >;
  };

  getEvents?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getEvents: EventsBetweenDates;
      },
      QueryGetEventsArgs
    >;
  };

  getEventsByAssigneeId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getEventsByAssigneeId: EventsBetweenDates;
      },
      QueryGetEventsByAssigneeIdArgs
    >;
  };

  createEvent?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createEvent: Event;
      },
      MutationCreateEventArgs
    >;
  };

  saveEvent?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveEvent: Event;
      },
      MutationSaveEventArgs
    >;
  };

  deleteEvent?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteEvent: Event;
      },
      MutationDeleteEventArgs
    >;
  };
}

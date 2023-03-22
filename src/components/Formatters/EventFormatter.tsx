import React, { useEffect } from "react";
import get from "lodash/get";
import { FormatLoader } from "../";
import { useEventApi } from "../..";

interface EventFormatterProps {
  /** The id of the event record */
  id: string;
}

/** Returns the event name inside of an unstyled span tag */
export const EventFormatter: React.FC<EventFormatterProps> = ({ id }) => {
  const {
    getEvent: { query: getEvent, data, loading },
  } = useEventApi({
    getEvent: {
      options: {
        fetchPolicy: "cache-first",
      },
    },
  });

  useEffect(() => {
    getEvent({ variables: { id } });
  }, [getEvent, id]);

  const name = get(data, "getEvent.name", "");

  if (loading) {
    return <FormatLoader />;
  }

  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

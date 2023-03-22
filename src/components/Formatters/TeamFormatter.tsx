import React, { useEffect } from "react";
import get from "lodash/get";
import { FormatLoader } from "..";
import { useTeamApi } from "../../api";

interface TeamFormatterProps {
  /** The id of the team record */
  id: string;
}

/** Returns the team name inside of an unstyled span tag */
export const TeamFormatter: React.FC<TeamFormatterProps> = ({ id }) => {
  const {
    getTeam: { query: getTeam, data, loading },
  } = useTeamApi();

  useEffect(() => {
    getTeam({ variables: { id } });
  }, [getTeam, id]);

  const name = get(data, "getTeam.name", "");

  if (loading) {
    return <FormatLoader />;
  }

  return <span>{name}</span>;
};

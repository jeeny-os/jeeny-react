import { get } from "lodash";
import React, { useEffect } from "react";
import { useCompanyUserApi } from "../..";
import { FormatLoader } from "../";

interface CompanyUserFormatterProps {
  /** The id of the companyUser record */
  id: string;
}

/** Returns the companyUsers first and last names inside of an unstyled span tag */
export const CompanyUserFormatter: React.FC<CompanyUserFormatterProps> = ({
  id,
}) => {
  const {
    getCompanyUser: { query: getCompanyUser, data, loading },
  } = useCompanyUserApi();

  useEffect(() => {
    getCompanyUser({ variables: { id } });
  }, [getCompanyUser, id]);

  const name = `${get(data, "getCompanyUser.user.firstName", "")} ${get(
    data,
    "getCompanyUser.user.lastName",
    ""
  )}`;

  if (loading) {
    return <FormatLoader />;
  }

  return <span>{name}</span>;
};

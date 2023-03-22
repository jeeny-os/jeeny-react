import React from "react";

interface EmployeeFormatterProps {
  /** The composite string of the employee in type:id:firstName:lastName format */
  id: string;
}

/** Returns the employee first and last names inside of an unstyled span tag */
export const EmployeeFormatter: React.FC<EmployeeFormatterProps> = ({ id }) => {
  const [_, __, firstName, lastName] = id.split(":");

  return (
    <span>
      {firstName} {lastName}
    </span>
  );
};

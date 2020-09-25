import React from "react";
import { TableWrapper } from "../elements";

// Component to show table in the blog article - taken from class project

export const Table = ({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  );
};

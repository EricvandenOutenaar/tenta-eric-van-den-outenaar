import React from "react";
import { MainContentWrapper } from "../elements";

// This component has only one job and that is to hold the content elements...
export const MainContentContainer = ({ children }) => {
  return <MainContentWrapper>{children}</MainContentWrapper>;
};

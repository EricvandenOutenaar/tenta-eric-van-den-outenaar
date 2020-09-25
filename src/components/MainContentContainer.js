import React from "react";
import { MainContentWrapper } from "../elements";

// This component has only one job and that is containing content elements...
export const MainContentContainer = ({ children }) => {
  return <MainContentWrapper>{children}</MainContentWrapper>;
};

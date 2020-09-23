import React from "react";
import { MainContentWrapper } from "../elements";

// This component will serve as the main element...

export const MainContentContainer = ({ children }) => {
  return <MainContentWrapper>{children}</MainContentWrapper>;
};

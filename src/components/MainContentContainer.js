import React from "react";
import { MainContentWrapper } from "../elements";
 
export const MainContentContainer = ({children}) => {
  return (
    <MainContentWrapper>
      {children}
    </MainContentWrapper>
  );
};

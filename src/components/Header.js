import React from "react";
import {
  HeaderWrapper,
  LogoBlogTitleWrapper,
  CallToActionWrapper,
  NavWrapper,
} from "../elements";

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoBlogTitleWrapper>
        <h3>Logo and Title</h3>
      </LogoBlogTitleWrapper>
      <NavWrapper>
        <h3>Nav</h3>
      </NavWrapper>
      <CallToActionWrapper>
        <h3>Sign up</h3>
      </CallToActionWrapper>
      
    </HeaderWrapper>
  );
};

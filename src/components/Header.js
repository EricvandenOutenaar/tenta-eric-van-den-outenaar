import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  HeaderWrapper,
  LogoBlogTitleWrapper,
  NavLink,
  NavWrapper,
  DropdownButtonWrapper,
  Typography,
} from "../elements";
import { DropdownButton } from "../components";

export const Header = ({ hideTitle, smallHeader }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  console.log("test", showDropdown);
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
      hamburger: file(relativePath: { eq: "bars-solid.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <HeaderWrapper smallHeader={smallHeader} dropdown={showDropdown}>
      <LogoBlogTitleWrapper hideTitle={hideTitle}>
        <img src={data.logo.publicURL}></img>
        <Typography type="h1" area="header" italic>
          Travel Blog
        </Typography>
      </LogoBlogTitleWrapper>
      <NavWrapper dropdown={showDropdown}>
        <ul>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <Typography type="h3" area="nav">
                Home
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <Typography type="h3" area="nav">
                About me
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <Typography type="h3" area="nav">
                Contact
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <Typography type="h3" area="nav">
                Sign up
              </Typography>
            </NavLink>
          </li>
        </ul>
      </NavWrapper>
      <DropdownButtonWrapper
        dropdown={showDropdown}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {showDropdown ? "X" : <img src={data.hamburger.publicURL}></img>}
      </DropdownButtonWrapper>
    </HeaderWrapper>
  );
};

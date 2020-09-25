import React, { useState, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "styled-components";

import {
  HeaderWrapper,
  LogoBlogTitleWrapper,
  NavLink,
  NavWrapper,
  Typography,
  DropdownControlWrapper,
} from "../elements";

/*
  I have created functionality for a very simple hamburger/dropdown menu. I haven't looked at the exemples
  posted on Slack, but used my previous experience with the React useState hook.
  In addition, I have set all the navlinks to just link to the homepage for now...      
*/
export const Header = ({ hideTitle, smallHeader }) => {
  // Here we can use Reacts useContext hook to get access to our theme...
  const theme = useContext(ThemeContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
      hamburger: file(relativePath: { eq: "hamburgerwhite.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <HeaderWrapper smallHeader={smallHeader} dropdown={showDropdown}>
      <LogoBlogTitleWrapper hideTitle={hideTitle}>
        <img src={data.logo.publicURL} alt="logo"></img>
        <Typography
          type="h1"
          area="header"
          italic
          size="large"
          style={{
            margin: `${theme.spacings.large} 0 0 ${theme.spacings.large}`,
          }}
        >
          Travel Blog
        </Typography>
      </LogoBlogTitleWrapper>
      <NavWrapper dropdown={showDropdown}>
        <ul>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <Typography type="p" area="nav" bold>
                Home
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <Typography type="p" area="nav" bold>
                About me
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <Typography type="p" area="nav" bold>
                Contact
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <Typography type="p" area="nav" bold>
                Sign up
              </Typography>
            </NavLink>
          </li>
        </ul>
        <DropdownControlWrapper
          dropdown={showDropdown}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {showDropdown ? (
            <Typography size="large" area="header">
              X
            </Typography>
          ) : (
            <img src={data.hamburger.publicURL} alt="Hamburger icon"></img>
          )}
        </DropdownControlWrapper>
      </NavWrapper>
    </HeaderWrapper>
  );
};

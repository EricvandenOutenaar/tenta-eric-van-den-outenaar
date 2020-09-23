import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  HeaderWrapper,
  LogoBlogTitleWrapper,
  NavLink,
  NavWrapper,
  Typography,
  DropdownControlWrapper,
} from "../elements";

/*
  In the header component there I quite some properties to play with. I have built in the option
  to show a smaller/thinner version of the header (prop is set in Single blog template , passed through the Layout component 
  down to this component where it is passed to the HeaderWrapper). In the same manner, the hideTitle prop is set.
  In addition, I have created functionality for a very simple hamburger/dropdown menu. I haven't looked at the exemples
  you posted on Slack, but used my previous knowlegde of the React usestate hook and how the handling
  of a toggle state works in a React component.      
*/
export const Header = ({ hideTitle, smallHeader }) => {
  const [showDropdown, setShowDropdown] = useState(false);

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
        <Typography type="h1" area="header" italic size="large">
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
      </NavWrapper>
      <DropdownControlWrapper
        dropdown={showDropdown}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {showDropdown ? "X" : <img src={data.hamburger.publicURL}></img>}
      </DropdownControlWrapper>
    </HeaderWrapper>
  );
};

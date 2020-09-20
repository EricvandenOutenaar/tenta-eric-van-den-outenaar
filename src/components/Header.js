import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  HeaderWrapper,
  LogoBlogTitleWrapper,
  NavLink,
  NavWrapper,
  DropdownButtonWrapper,
} from "../elements";
import { DropdownButton } from "../components";

export const Header = ({ hideTitle, smallHeader }) => {

  const [showDropdown, setShowDropdown] = useState(false);
  console.log("test", showDropdown);
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      },
      hamburger: file(relativePath: { eq: "bars-solid.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <HeaderWrapper smallHeader={smallHeader} dropdown={showDropdown}>
      <LogoBlogTitleWrapper hideTitle={hideTitle}>
        <img src={data.logo.publicURL}></img>
        <h1>My Travel Blog</h1>
      </LogoBlogTitleWrapper>
      <NavWrapper dropdown={showDropdown}>
        <ul>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <h3>Home</h3>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <h3>About me </h3>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <h3>Contact</h3>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowDropdown(false)} to="/">
              <h3>Sign up</h3>
            </NavLink>
          </li>
        </ul>
      </NavWrapper>
      <DropdownButtonWrapper
      dropdown={showDropdown} onClick={() => setShowDropdown(!showDropdown)}
    >
      {showDropdown ? 'X' : <img src={data.hamburger.publicURL}></img>}
    </DropdownButtonWrapper>
    </HeaderWrapper>
  );
};

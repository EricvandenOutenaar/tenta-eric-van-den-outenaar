import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  HeaderWrapper,
  LogoBlogTitleWrapper,
  NavLink,
  NavWrapper,
} from "../elements";

export const Header = ({ hideTitle, halveSize}) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <HeaderWrapper halveSize={halveSize}>
      <LogoBlogTitleWrapper hideTitle={hideTitle} >
        <img src={data.logo.publicURL}></img>
        <h1>My Travel Blog</h1>
      </LogoBlogTitleWrapper>
      <NavWrapper>
        <ul>
          <li>
            <NavLink to="/">
              <h3>Home</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h3>About me </h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h3>Contact</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h3>Sign up</h3>
            </NavLink>
          </li>
        </ul>
      </NavWrapper>
    </HeaderWrapper>
  );
};

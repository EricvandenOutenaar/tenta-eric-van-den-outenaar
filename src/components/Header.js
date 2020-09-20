import React, {useState} from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  HeaderWrapper,
  LogoBlogTitleWrapper,
  NavLink,
  NavWrapper,
} from "../elements";

export const Header = ({ hideTitle, halveSize}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  console.log('test', showDropdown);
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <HeaderWrapper halveSize={halveSize} dropdown={showDropdown}>
      <LogoBlogTitleWrapper hideTitle={hideTitle} >
        <img src={data.logo.publicURL}></img>
        <h1>My Travel Blog</h1>
      </LogoBlogTitleWrapper>
      <NavWrapper dropdown={showDropdown}>
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
      <button  onClick={()=> setShowDropdown(true)}>Menu</button>
      <button style={{display: !showDropdown && "none"}} onClick={()=>setShowDropdown(false)}>X</button>
    </HeaderWrapper>
  );
};

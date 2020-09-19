import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  padding: ${({ theme }) => theme.spacings.small};
  color: ${({ theme }) => theme.colors.onPrimary};
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / span 10;
  grid-row: 1 / ${({ halveSize }) => halveSize ? 4 : 5};
  }
`;

export const LogoBlogTitleWrapper = styled.div`
  display: none;
  img {
    width: 5rem;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
  }
  h1 {
    font-size: 4.5rem;
    font-weight: 200;
    padding: ${({ theme }) => theme.spacings.large} 0 0 0;
    display: ${({ hideTitle }) => (hideTitle ? "none" : "block")};
  }
`;

export const NavWrapper = styled.nav`
  flex-grow: 1;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    ul {
      justify-content: space-between;
    }
    li {
      margin: 0 ${({ theme }) => theme.spacings.large};
    }
  }
`;

/*
 created a custom Link wrapper to set the style in one place instead as inline in 4 nav Links
*/
export const NavLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.colors.onPrimary};
  text-decoration: none;
`;

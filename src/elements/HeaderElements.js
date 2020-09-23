import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: ${({ theme }) => theme.spacings.small};
  color: ${({ theme }) => theme.colors.onBackground};
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 1 / ${({ dropdown }) => (dropdown ? 20 : 2)};
  display: flex;
  justify-content: space-between;
  z-index: ${({ dropdown }) => dropdown && 50};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / span 13;
    grid-row: 1 / ${({ smallHeader }) => (smallHeader ? 5 : 6)};
  }
`;

export const LogoBlogTitleWrapper = styled.div`
  display: none;
  img {
    width: 5rem;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
    width: 40%;
  }
  h1 {
    font-size: 4.5rem;
    padding: ${({ theme }) => theme.spacings.large} 0 0 0;
    display: ${({ hideTitle }) => (hideTitle ? "none" : "block")};
  }
`;

export const NavWrapper = styled.nav`
  padding: ${({ theme: { spacings } }) => spacings.large};
  flex-grow: 1;
  ul {
    display: ${({ dropdown }) => (!dropdown ? "none" : "flex")};
    flex-direction: ${({ dropdown }) => dropdown && "column"};
    list-style: none;
    justify-content: space-between;
    align-items: ${({ dropdown }) => dropdown && "center"};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    ul {
      display: flex;
      flex-direction: row;
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
  color: ${({ theme }) => theme.colors.onBackground};
  text-decoration: none;
`;

export const DropdownButtonWrapper = styled.button`
  width: 2rem;
  height: 2rem;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

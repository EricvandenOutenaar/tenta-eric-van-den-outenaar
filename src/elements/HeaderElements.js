import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

/*
  This file contains all styling components in the header (including nav). 
  The props 'dropdown' is needed to manipulate the dropdown-menu-styling.
  The smallheader-prop is used to have the option set the header 
  to a slightly smaller height. In addition to the ternary operator, 
  I use the logical And operator (&&). The && operator allows for shorter code.  
  I also destruct props in the function head whenever I can.  
*/
export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: ${({ theme }) => theme.spacings.small};
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
/*
  I am wrapping the logo and the blog headline in one wrapper. Since 
  my logo doesn't have navigation functionality I've dediced to keep it 
  out of the navbar. I have created a prop called hide title, because I want 
  the headline not to be visible on the individual blog pages.
*/
export const LogoBlogTitleWrapper = styled.div`
  display: none;
  img {
    width: 5rem;
    filter: invert(70%);
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
    width: 40%;
  }
  h1 {
    padding: ${({ theme }) => theme.spacings.large} 0 0 0;
    display: ${({ hideTitle }) => (hideTitle ? "none" : "block")};
  }
`;
/*
  In the navwrapper, I set the list to display flex and the li-items
  become flex items. Flex direction changes from the default 'row' 
  to 'column' when dropdown is true.  
  The NavWrapper itself is also a flex item in the header wrapper. 
  I have set it to flex grow 1 so it will take up all the remaing space. 
  I want the LogoBlogTitleWrapper to be pushed to the left and 
  the navbar be positioned from approximately the center to the right.   
*/
export const NavWrapper = styled.nav`
  position: relative;
  padding: ${({ theme: { spacings } }) => spacings.large};
  flex-grow: 1;
  ul {
    display: ${({ dropdown }) => (!dropdown ? "none" : "flex")};
    flex-direction: ${({ dropdown }) => dropdown && "column"};
    list-style: none;
    justify-content: space-between;
    align-items: ${({ dropdown }) => dropdown && "center"};
  }
  li {
    margin: ${({ theme }) => theme.spacings.large} 0;
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

// I've created a custom Link wrapper to wrap the li-items in the navbar.
export const NavLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.colors.onBackground};
  text-decoration: none;
`;

/* 
  This will function as wrapper for our toggle functionality
  The wrapper is an flex item of the Navwrapper, but we position it
  to the top right corner.   
*/
export const DropdownControlWrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  width: 3rem;
  height: 3rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

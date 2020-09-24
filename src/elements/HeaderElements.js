import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

/*
  This file contains all the styling components that can be found in the header.
  I have have created a props called dropdown to manipulate the header background on mobile screens.
  When a user clicks on the hamburger menu icon the value becomes true and grid row end number changes,
  and the component will rerender with the new style, providing a background for the 
  collapsed dropdown list with menu items.  
  In addition to the ternary operator, I like to use the logical And operator (&&). 
  The && operator allows for shorter code. It functions like an if-statement (if true do this). 
  In combination with this kind of dynamic setting of css properties, this works well. The property simply 
  doesn't get set if your it isn't true.    
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
  I am wrapping my logo and blog headline in one wrapper 
  I consideren putting the logo actually in the navbar, but since 
  my logo doesn't have navigation functionality I've kept it out of the navbar. 
  I have created a prop called hide title, because I want the attention drawing headline 
  to be visible only on the landing page but not on the individual blog pages.
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
  In the navwrapper, I set the list to display flex and the li items
  become flex items. I change the flex direction from the default row 
  to column in order to create the dropdown menu functionality. 
  The NavWrapper itself is also a flex item in the header wrapper. I have set it to 
  flex grow 1 so it will take up all the remaing space. I want the LogoBlogTitleWrapper
  to be pushed to the left and the navbar be positioned from approximately the center to the right.   
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

// I've created a custom Link wrapper to wrap the li items in the navbar.
export const NavLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.colors.onBackground};
  text-decoration: none;
`;

// This will a wrapper for our 'on/off switch' of the dropdown menu
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

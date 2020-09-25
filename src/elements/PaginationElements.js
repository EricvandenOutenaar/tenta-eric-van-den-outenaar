import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

/*
  This component I have simply taken from our project 
  and fit it into this website. I haven't styled it. 
*/
export const PaginationWrapper = styled.div`
  grid-column: 1 / span 7;
  grid-row: 21 /23;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / 13;
  }
  a:nth-child(1) {
    color: ${props =>
      props.isFirst
        ? props.theme.colors.secondaryLight
        : props.theme.colors.secondaryDark};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  a:nth-child(2) {
    color: ${props =>
      props.isLast
        ? props.theme.colors.secondaryLight
        : props.theme.colors.secondaryDark};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }
`;

export const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 2rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

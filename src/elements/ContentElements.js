import styled from "styled-components";

export const ContentWrapper = styled.main`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: auto;
  z-index: 10;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 2;
    grid-column-end: 10;
  }
`;

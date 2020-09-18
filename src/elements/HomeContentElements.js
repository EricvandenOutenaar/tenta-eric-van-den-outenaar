import styled from "styled-components";

export const HomeContentWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 3;


  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 2;
    grid-column-end: 10;
  }
`;

import styled from "styled-components";

/*
  This styled component will serve as our main element. 
  I use the grid to create a layered effect - the main content
  falls partly on top off the header.  
 */
export const MainContentWrapper = styled.main`
  grid-column: 1 / 7;
  grid-row: 3 / span 18;
  padding: ${({ theme }) => theme.spacings.xxSmall};
  z-index: 1;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 2 / 12;
    grid-row: 4 / span 17;
    padding: ${({ theme }) => theme.spacings.small};
  }
`;

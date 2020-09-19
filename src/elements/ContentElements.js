import styled from "styled-components";

export const ContentWrapper = styled.main`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 19;
  padding: ${({ theme }) => theme.spacings.xxSmall};
  z-index: 1;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-row-start: 4;
  grid-column-end: 11;
  padding: ${({ theme }) => theme.spacings.small};
  }
`;

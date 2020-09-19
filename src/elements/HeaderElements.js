import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryMain};
  color: ${({ theme }) => theme.colors.onPrimary};
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 1 / 4;
  display: flex;
  justify-content: space-evenly;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / span 10;
  }
`;

export const LogoBlogTitleWrapper = styled.div`
  display: block;
`;
export const CallToActionWrapper = styled.div`
  display: block;
`;
export const NavWrapper = styled.nav``;

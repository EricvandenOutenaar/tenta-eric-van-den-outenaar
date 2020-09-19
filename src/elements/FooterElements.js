import styled from "styled-components";

// to be defined further later
export const FooterWrapper = styled.footer`
  grid-column: 1 / 7;
  grid-row: 19;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / 11;
    grid-row: 23;
  }
  display: flex;
`;


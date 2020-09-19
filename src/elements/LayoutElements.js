import styled from "styled-components";

export const LayoutWrapper = styled.div`
  height: 100;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 4rem 2rem repeat(5, 5rem) auto;
  gap: 0 1rem;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 1fr repeat(8, minmax(9rem, auto)) 1fr;
    grid-template-rows: 4rem repeat(25, 5rem);
    gap: 0 0.8rem;
  }
`;

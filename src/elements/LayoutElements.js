import styled from "styled-components";

/*
  Here I'll define the style of the layout, 
  which serves as the container of the page. 
  I have tried to defined the styles with 
  mobile first in mind. I have also set a max width 
  to the layout container to prevent the content from
  streching out too much on very large screens.
*/

export const LayoutWrapper = styled.div`
  height: 100%;
  max-width: 124 rem;
  padding: ${({theme}) => theme.spacings.medium} ${({theme}) => theme.spacings.small}; 
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 4rem 2rem repeat(5, 5rem) auto;

  @media ${({ theme }) => theme.breakpoints.tablet} { 
    gap: 0 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 4rem repeat(5, 5rem) auto;
    gap: 0 0.8rem;
  }
`;

import styled from "styled-components";

/*
  Here we'll define the layout, which serves as a container for the header, main and footer. 
  We'll define the main grid and develop the site mobile first. 
  On mobile we'll just have 6 columns that each take up an even fraction of the available space.
  On tablet we'll stick to 6 columns, but we'll create some horizontal gutters. 
  On desktop we'll have 12 columns to work with. We'll just have them each take up an even amount of space.    
  I have set a max width to the layout container to prevent the content from streching out on very large screens
  In addition, I have added a little bit of padding on the top/bottom and on the sides. 
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

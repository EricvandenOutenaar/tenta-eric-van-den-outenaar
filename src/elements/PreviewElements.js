import styled from "styled-components";

/*
  This file holds all the elements that are not full blog articles, but function
  as preview (on the landing page) for those articles. 
*/

/* 
  This wrapper holds the so called featured preview article (opening
  preview article on the landing page).
  I set it to relatively small columns (on desktop) and rows 
  in order to be able to precisely place one of its items slightly
  on top of the other (to create a layered effect here as well).   
*/
export const FeaturedPreviewWrapper = styled.article`
  width: 100;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(18, 1.5rem);
  gap: 0 1rem;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(12, 2.5rem);
  }
`;
// Grid item one is the image holder
export const FeaturedPreviewImageWrapper = styled.div`
  grid-column: 1 / 7;
  grid-row: 1 / span 12;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / 15;
    grid-row: 1 / span 12;
  }
`;
// The second grid item is the contentholder
export const FeaturedPreviewContent = styled.div`
  grid-column: 1 / 7;
  grid-row: 8 / 19;
  padding: 0 ${({ theme }) => theme.spacings.medium};
  margin: 0 ${({ theme }) => theme.spacings.medium};
  z-index: 10;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.primaryMain};
  color: ${({ theme }) => theme.colors.onPrimary};

  p,
  h2 {
    padding: ${({ theme }) => theme.spacings.small} 0;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-column: 2 / 6;
    grid-row: 9 / 17;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 13 / 21;
    grid-row: 3 / 11;
  }
`;
// I ended up with a 'gap' in the . I  
export const ColorGapFiller = styled.div`
  display: none;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
    grid-column: 15 / 21;
    grid-row: 1 / 2;
  }

  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

/*
this serves as a wrapper for the list of previewed blog articles in the main element 
on the homepage
*/
// export const PreviewWrapper = styled.section`
//   display: flex;
//   flex-wrap: wrap;
// `;

/* 
A preview article will consist out of an image, a header a topics icon, which 
will be a link to related blogs, an intro text (excerpt) and a show more button. 
*/
export const BlogPreviewWrapper = styled.article`
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 50%;
    margin: ${({ theme }) => theme.spacings.large} auto 0;
    padding: ${({ theme }) => theme.spacings.large}
      ${({ theme }) => theme.spacings.extraLarge};
  }
  p,
  h2 {
    padding: ${({ theme }) => theme.spacings.small} 0;
  }
  img {
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const BlogPreviewContainerWrapper = styled.section`
  margin: ${({ theme }) => theme.spacings.extraLarge} auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;

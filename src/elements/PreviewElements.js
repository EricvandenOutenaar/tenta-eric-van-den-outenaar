import styled from "styled-components";

// this serves as a wrapper for the featured article in main
//export const FeaturedCWrapper = styled.section``;

// the featured article will be a grid item for an image and a content card
export const FeaturedPreviewWrapper = styled.article`
  width: 100;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(12, 2.5rem);
  gap: 0 1rem;
`;

export const FeaturedPreviewImageWrapper = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / span 12;
`;
export const FeaturedPreviewContent = styled.div`
  grid-column: 13 / 21;
  grid-row: 2 / span 10;
  z-index: 10;
  background-color: red;
`;

export const ColorGapFiller = styled.div`
  grid-column: 15 / 21;
  grid-row: 1 / 2;
  background-color: ${({ theme }) => theme.colors.primaryDark};
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
export const ArticlePreviewWrapper = styled.article`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.small};
  position: relative;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 33%;
  }

  img {
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const ArticlePreviewContainerWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

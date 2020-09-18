import styled from "styled-components";

/*
this serves as a wrapper for the list of previewed blog articles in the main element 
on the homepage
*/
export const PreviewWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

/* 
A preview article will consist out of an image, a header a topics icon, which 
will be a link to related blogs, an intro text (excerpt) and a show more button. 
*/
export const PreviewArticle = styled.article`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.small};
  position: relative;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 50%;
  }

  img {
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
  }
`;

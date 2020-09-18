import styled from "styled-components";

// this serves as a wrapper for the featured article in main
export const FeaturedWrapper = styled.section``;

// the featured article will be a grid item for an image and a content card
export const FeaturedArticle = styled.article`
  width: 100;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: 3rem auto;
  gap: 0 1rem;
`;

export const FeaturedImage = styled.img`
  grid-column: 1 / 15;
`;
export const FeaturedContent = styled.div`
  grid-column: 14 / auto;
  grid-row: 2 / auto;
`;

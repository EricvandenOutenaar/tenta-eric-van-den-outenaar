import React from "react";
import {
  ArticlePreviewWrapper,
} from "../elements";
//import { Button } from "../components"

export const ArticlePreview = ({ date, title, excerpt, slug }) => {
  return (
      <ArticlePreviewWrapper>
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <p>{slug}</p>
        <p>{date}</p>
      </ArticlePreviewWrapper>
    
  );
};

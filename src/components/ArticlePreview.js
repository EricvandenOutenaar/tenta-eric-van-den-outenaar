import React from "react";
import { ArticlePreviewWrapper } from "../elements";
import Img from "gatsby-image";
//import { Button } from "../components"

const imageStyle = {
  width: "100%",
  //height: "100%",
};

export const ArticlePreview = ({
  date,
  title,
  excerpt,
  slug,
  featureImage,
}) => {
  return (
    <ArticlePreviewWrapper>
      <Img fixed={featureImage} style={imageStyle} />
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <p>{slug}</p>
      <p>{date}</p>
    </ArticlePreviewWrapper>
  );
};

import React from "react";
import { ArticlePreviewWrapper } from "../elements";
import { Button } from "../components";
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
      <p>{date}</p>
      <Button href={slug}>Show more</Button>
    </ArticlePreviewWrapper>
  );
};

import React from "react";
import { BlogPreviewWrapper } from "../elements";
import { Button } from ".";
import Img from "gatsby-image";
//import { Button } from "../components"

const imageStyle = {
  width: "100%",
  //height: "100%",
};

export const BlogPreview = ({
  date,
  title,
  excerpt,
  slug,
  featureImage,
}) => {
  return (
    <BlogPreviewWrapper>
      <Img fixed={featureImage} style={imageStyle} />
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <p>{date}</p>
      <Button href={slug}>Show more</Button>
    </BlogPreviewWrapper>
  );
};

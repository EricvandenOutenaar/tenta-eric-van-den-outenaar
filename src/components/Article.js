import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";

const imageStyle = {
  width: "100%",
  height: "100%",
};

export const Article = ({ date, title, excerpt, featureImage, article }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <Img fixed={featureImage} style={imageStyle} />
      <p>{excerpt}</p>
      <MDXRenderer>{article}</MDXRenderer>
    </>
  );
};

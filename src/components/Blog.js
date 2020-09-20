import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import {BlogWrapper} from "../elements";

const imageStyle = {
  width: "100%",
  display: "block",
};

export const Blog = ({ date, title, excerpt, fixed, article }) => {
  return (
    <BlogWrapper>
      <h1>{title}</h1>
      <p>{date}</p>
      <Img fixed={fixed} style={imageStyle} />
      <p>{excerpt}</p>
      <MDXRenderer>{article}</MDXRenderer>
    </BlogWrapper> 
  );
};

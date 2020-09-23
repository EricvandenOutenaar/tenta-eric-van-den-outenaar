import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import { BlogWrapper, Typography } from "../elements";

const imageStyle = {
  width: "100%",
  display: "block",
};
// I have put the MDX renderer in the blog component, to keep the single blog template 'cleaner'
export const Blog = ({ date, title, excerpt, fixed, article }) => {
  return (
    <BlogWrapper>
      <Typography type="h1">{title}</Typography>
      <Typography type="p">{date}</Typography>
      <Img fixed={fixed} style={imageStyle} />
      <Typography>{excerpt}</Typography>
      <MDXRenderer>{article}</MDXRenderer>
    </BlogWrapper>
  );
};

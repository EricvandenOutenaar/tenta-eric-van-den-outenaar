import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import { BlogWrapper, Typography } from "../elements";

const imageStyle = {
  width: "100%",
  display: "block",
  height: "20rem",
};
/*
  This component holds a sign blog post. 
  I have put the MDX renderer in the blog component (to keep the template Single blog cleaner).
*/
export const Blog = ({ date, title, excerpt, fixed, article }) => {
  return (
    <BlogWrapper>
      <Typography size="large" type="h1">
        {title}
      </Typography>
      <Typography type="p">{date}</Typography>
      <Img fixed={fixed} style={imageStyle} />
      <Typography>{excerpt}</Typography>
      <MDXRenderer>{article}</MDXRenderer>
    </BlogWrapper>
  );
};

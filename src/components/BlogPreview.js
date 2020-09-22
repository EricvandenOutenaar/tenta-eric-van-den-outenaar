import React from "react";
import { BlogPreviewWrapper, Typography } from "../elements";
import { Button } from ".";
import Img from "gatsby-image";
//import { Button } from "../components"

const imageStyle = {
  width: "100%",
  //height: "100%",
};

export const BlogPreview = ({ date, title, excerpt, slug, featureImage }) => {
  return (
    <BlogPreviewWrapper>
      <Img fixed={featureImage} style={imageStyle} />
      <Typography type="h2" area="blogPreview">
        {title}
      </Typography>
      <Typography area="blogPreview">{date}</Typography>
      <Typography area="blogPreview">{excerpt}</Typography>
      <Button href={slug}>Show more</Button>
    </BlogPreviewWrapper>
  );
};

import React from "react";
import { BlogPreviewWrapper, Typography } from "../elements";
import { Button } from ".";
import Img from "gatsby-image";

const imageStyle = {
  width: "100%",
};

export const BlogPreview = ({ date, title, excerpt, slug, featureImage }) => {
  return (
    <BlogPreviewWrapper>
      <Img fixed={featureImage} style={imageStyle} />
      <Typography type="h3" area="blogPreview">
        {title}
      </Typography>
      <Typography area="blogPreview">{date}</Typography>
      <Typography area="blogPreview">{excerpt}</Typography>
      <Button href={slug}>Show more</Button>
    </BlogPreviewWrapper>
  );
};

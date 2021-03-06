import React from "react";
import Img from "gatsby-image";

import {
  FeaturedPreviewWrapper,
  FeaturedPreviewImageWrapper,
  FeaturedPreviewContent,
  ColorGapFiller,
  Typography,
} from "../elements";
import { Button } from ".";

const imageStyle = {
  width: "100%",
  height: "100%",
};

/*
  This component holds the FeaturedBlogPreview,
  which is the highlighted, eyecatching opening on the 
  landing page. The component is the first block element 
  in the MainContentContainer.
*/
export const FeaturedBlogPreview = ({
  featureImage,
  date,
  title,
  excerpt,
  slug,
}) => {
  return (
    <FeaturedPreviewWrapper>
      <FeaturedPreviewImageWrapper>
        <Img fixed={featureImage} style={imageStyle} />
      </FeaturedPreviewImageWrapper>
      <FeaturedPreviewContent>
        <Typography type="h3" area="featurePreview">
          {title}
        </Typography>
        <Typography area="featurePreview">{date}</Typography>
        <Typography area="featurePreview">{excerpt}</Typography>
        <Button href={slug}>Show more</Button>
      </FeaturedPreviewContent>
      <ColorGapFiller />
    </FeaturedPreviewWrapper>
  );
};

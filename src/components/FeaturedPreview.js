import React from "react";
import Img from "gatsby-image";
// import { useStaticQuery, graphql } from "gatsby";
import {
  FeaturedPreviewWrapper,
  FeaturedPreviewImageWrapper,
  FeaturedPreviewContent,
  ColorGapFiller,
} from "../elements";

const imageStyle = {
  width: "100%",
  height: "100%",
};

export const FeaturedPreview = ({
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
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <p>{date}</p>
        <p>{slug}</p>
      </FeaturedPreviewContent>
      <ColorGapFiller />
    </FeaturedPreviewWrapper>
  );
};



import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
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

export const FeaturedPreview = ({ featureImage, date, title, excerpt, slug  }) => {
  
    const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "bromo-mountain.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `);
  return (
    <FeaturedPreviewWrapper>
      <FeaturedPreviewImageWrapper>
        <Img
          fixed={featureImage ? featureImage: data.imageSharp.fixed}
          style={imageStyle}
        />
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

/*
export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "viggen.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `);

  return (
    <FeatureImageWrapper>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </FeatureImageWrapper>
  );
};

*/

import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MainContentContainer} from "../components";
import { Typography} from "../elements";

/* 
I have just put the 404 content in a the MainContentContainer. 
In that way, it will be wrapped by the semantic main element... 
*/

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed;

  return (
    <MainContentContainer>
      <Img fixed={featureImage} style={{ width: "100vw", height: "40rem" }} />
      <Typography type="h1">Uh-oh... What you're looking for could not be found</Typography>
    </MainContentContainer>
  );
};

export default notFound;

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "sad-dog.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

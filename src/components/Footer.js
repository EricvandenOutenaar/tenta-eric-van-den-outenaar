import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FooterWrapper, FooterSocialIcons, Typography } from "../elements";

/*
 Here, I have placed the FooterSocialIcons and copyright text
 in the Footerwrapper.
*/
export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <FooterWrapper>
      <FooterSocialIcons>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={data.facebook.publicURL} alt="Facebook logo" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={data.linkedin.publicURL} alt="Linkedin logo" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={data.twitter.publicURL} alt="Twitter logo" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={data.instagram.publicURL} alt="Instagram logo" />
        </a>
      </FooterSocialIcons>
      <Typography area="footer">
        © 2020 Blog Company. All rights reserved.
      </Typography>
    </FooterWrapper>
  );
};

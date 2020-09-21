import React from "react";
import { graphql } from "gatsby";
import { MainContentContainer, Layout, Blog,Seo } from "../components";

const singleBlog = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed;
  const seoImage = data.mdx.frontmatter.featureImage.publicURL;
  const {
    frontmatter: { title, excerpt, date },
    body,
  } = data.mdx;

  console.log("test", featureImage, "test");
  return (
    <Layout hideTitle smallHeader>
      <Seo
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.excerpt}
      />
      <MainContentContainer>
        <Blog
          fixed={featureImage}
          title={title}
          excerpt={excerpt}
          date={date}
          article={body}
        />
      </MainContentContainer>
    </Layout>
  );
};

export default singleBlog;

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          publicURL
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";
import { Content, Layout, Article } from "../components";

const singleBlog = ({ data }) => {
  const {
    featureImage,
  } = data.mdx.frontmatter.featureImage.childImageSharp.fixed;
  const {
    frontmatter: { title, excerpt, date },
    body,
  } = data.mdx;

  return (
    <Layout hideTitle halveSize>
      <Content>
        <Article
          fixed={featureImage}
          title={title}
          excerpt={excerpt}
          date={date}
          article={body}
        />
      </Content>
    </Layout>
  );
};

export default singleBlog;

export const pageQuery = graphql`
  query SingleBlogQuery($id: String!) {
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

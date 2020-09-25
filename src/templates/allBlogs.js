import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  MainContentContainer,
  FeaturedBlogPreview,
  BlogPreview,
  BlogPreviewContainer,
  Seo,
  Pagination,
} from "../components";

// Template for the allblogs-pages.

const allBlogs = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;

  const blogs = data.allMdx.edges;

  return (
    <Layout>
      <Seo />
      <MainContentContainer>
        <FeaturedBlogPreview
          key={blogs[0].node.frontmatter.slug}
          date={blogs[0].node.frontmatter.date}
          title={blogs[0].node.frontmatter.title}
          excerpt={blogs[0].node.frontmatter.excerpt}
          slug={blogs[0].node.frontmatter.slug}
          featureImage={
            blogs[0].node.frontmatter.featureImage.childImageSharp.fixed
          }
        />
        <BlogPreviewContainer>
          {blogs.map((blog, index) => {
            return (
              index !== 0 && (
                <BlogPreview
                  date={blog.node.frontmatter.date}
                  title={blog.node.frontmatter.title}
                  excerpt={blog.node.frontmatter.excerpt}
                  slug={blog.node.frontmatter.slug}
                  featureImage={
                    blog.node.frontmatter.featureImage.childImageSharp.fixed
                  }
                ></BlogPreview>
              )
            );
          })}
        </BlogPreviewContainer>
      </MainContentContainer>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export default allBlogs;

export const pageQuery = graphql`
  query AllBlogsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
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
    }
  }
`;

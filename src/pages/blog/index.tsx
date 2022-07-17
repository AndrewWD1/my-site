import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import "./blog.scss";

const BlogPage = ({ data }: { data: any }) => {
  return (
    <Layout image={0} blog>
      <div className="blog-container">
        <h2>Blog Entries</h2>
        {data.allMarkdownRemark.edges.map((edge: any) => (
          <div>
            <Link to={edge.node.fields.slug}>
              <h3 className="blog-item-title">{edge.node.frontmatter.title}</h3>
            </Link>

            <div className="blog-item-date">{edge.node.frontmatter.date}</div>
            <p>{edge.node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
      totalCount
    }
  }
`;

export default BlogPage;

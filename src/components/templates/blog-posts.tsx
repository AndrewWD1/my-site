import * as React from "react";
import { Link } from "gatsby";
import Layout from "../layout";
require(`katex/dist/katex.min.css`);
require("prismjs/themes/prism-solarizedlight.css");

export default ({ pageContext }: { pageContext: any }) => {
  const post = pageContext;

  return (
    <Layout image={0}>
      <div className="blog-container">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>
          <div className="other-articles">
            {post.next && (
              <Link className="link-underline" to={post.next.fields.slug}>
                &#8592;
                {`${post.next.frontmatter.title}`}
              </Link>
            )}
            <div></div>
            {post.previous && (
              <Link className="link-underline" to={post.previous.fields.slug}>
                {`${post.previous.frontmatter.title}`}
                &#8594;
              </Link>
            )}
          </div>
          <h3 className="divider"></h3>
          <footer>
            <div>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

import * as React from "react";
import "../styles.scss";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

const Layout = ({
  image = 1,
  blog = false,
  children,
}: {
  image: number;
  blog?: boolean;
  children: any;
}) => {
  return (
    <>
      <Helmet>
        <title>{`Andrew's ${blog ? "Blog" : "Site"}`}</title>
      </Helmet>
      <div className={`img-background img-background--${image}`} />
      <nav>
        <Link className="title" to="/">
          Andrew Doumont
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/math">Math</Link>
          </li>
          <li>
            <Link to="/teaching">Teaching</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;

import * as React from "react";
import Layout from "../components/layout";

const MathPage = () => {
  return (
    <Layout image={1}>
      <div className="info-container">
        <h2>Papers</h2>
        <span>(not published)</span>
        <ul>
          <li>
            <a
              className="white-link"
              href="https://ad-site.netlify.app/static/Sheaf_Cohomology_Intro.pdf"
            >
              Basic Sheaf Cohomology
            </a>{" "}
          </li>
        </ul>
        <br />
        <div className="border-line"></div>
        <h2>Research</h2>
        <ul>
          <li>Summer 2021 Topological Data Analysis reasearch </li>
        </ul>
      </div>
    </Layout>
  );
};

export default MathPage;

import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./header";

import "typeface-raleway";
import "typeface-work-sans";
import "../css/main.css";

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="flex flex-col flex-1 bg-white md:justify-center max-w-7xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="FooterColor">
        <nav className="flex justify-between max-w-4xl MenuItems mx-auto p-4 md:p-8 text-md">
          <p className="text-white">Created by </p>
          <a
            href="https://www.reddit.com/user/Johnnyb186"
            className="no-underline font-bold text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Johnnyb186
          </a>

          <p>
            <a
              href="https://www.reddit.com/user/mozart409"
              className="no-underline font-bold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozart409
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

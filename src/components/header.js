import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import { Alert } from "antd";


import favicon from "../images/favicon.png";

import "antd/dist/antd.css";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  const totalCount = useStaticQuery(graphql`
    query TotalCounteQuery {
      WallZip: allFile {
        totalCount
      }
    }
  `);

  return (
    <div>
      <nav id="MenuColor" className="MenuItems">
        <div className="flex flex-wrap items-center align-center justify-between max-w-4xl mx-auto p-4 md:p-8">
          <Link to="/" className="flex items-center no-underline text-white">
            <img
              src={favicon}
              className="rounded-lg w-24 border-solid border-2 border-white mr-4"
              alt="WPlus Logo"
            ></img>
            <span className="text-xl font-semibold">
              {totalCount.WallZip.totalCount} Wallpapers
            </span>
          </Link>

          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto`}
          >
            <div className="align-bottom">
              <Link
                to="/"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
              >
                Home
              </Link>

              <a
                className="inline-block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white align-baseline"
                href="https://drive.google.com/drive/folders/1u_H_5R7Ikq5rcBdmYuj-ayGNrN1zTbzw"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download All
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc-uso8pBFo_geQoxMFrOe8_mmhrma_1y9qTJjdtghfY6UvPg/viewform"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit
              </a>
              <a
                href="https://github.com/Mozart409/wallpapersplus/projects/1"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Changelog
              </a>
              <br />

            </div>
          </div>
        </div>
      </nav>

      <Alert
        message="Informational Notes"
        description="This site uses cookies and analytics."
        type="info"
        showIcon
        closable
      />
    </div>
  );
}

export default Header;

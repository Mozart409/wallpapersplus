import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function Gallery() {
  const ImgQuery = useStaticQuery(graphql`
    query Images {
      allFile(sort: { fields: birthtime }) {
        edges {
          node {
            name
            id
            base
            birthTime(fromNow: true)
            prettySize
            publicURL
            ext
            mode
            dir
            relativeDirectory
          }
        }
        totalCount
      }
    }
  `);
  return (
    <div>
      <div className="justify-center flex flex-wrap w-full">
        {ImgQuery.allFile.edges.map(({ node }) => (
          <div
            key={node.id}
            className="w-1/1 md:w-1/4 shadow-2xl border rounded-lg mt-16 mb-auto p-2 mx-2 bg-white"
          >
            <a
              href={node.publicURL}
              key={node.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                key={node.id}
                src={node.publicURL}
                className="rounded-lg w-64 mx-auto my-auto"
                alt={node.base}
              />
            </a>
            <div className="p-2">
              <div className="flex">
                <button className="w-full bg-blue-500 hover:bg-transparent font-semibold hover:text-blue-700 text-white mt-2 px-4 border border-blue-500 text-xs rounded">
                  {node.prettySize}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

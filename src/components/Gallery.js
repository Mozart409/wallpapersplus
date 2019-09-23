import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function Gallery() {
  const ImgQuery = useStaticQuery(graphql`
    query Images {
      allFile {
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
          }
        }
        totalCount
      }
    }
  `);
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {ImgQuery.allFile.edges.map(({ node }) => (
          <a
            href={node.publicURL}
            key={node.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              key={node.id}
              className="shadow-2xl border overflow-hidden rounded-lg mx-2 my-4 p-2 bg-white"
            >
              <img
                key={node.id}
                src={node.publicURL}
                className="rounded-lg w-64 "
                alt={node.base}
              />
              <div className="p-2">
                <div className="flex">
                  <button className="w-full bg-blue-500 hover:bg-transparent font-semibold hover:text-blue-700 text-white mt-2 px-4 border border-blue-500 text-xs rounded">
                    {node.prettySize}
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

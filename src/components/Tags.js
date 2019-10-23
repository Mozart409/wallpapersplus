import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import _ from "lodash";

function Tags() {
  const TagQuery = useStaticQuery(graphql`
    query Tags {
      allFile {
        edges {
          node {
            relativeDirectory
            id
          }
        }
        totalCount
      }
    }
  `);
  let result = _.omitBy(TagQuery.allFile.edges.node.relativeDirectory, _.isNil);
  console.log("----------");
  console.log(result);
  console.log("----------");

  return (
    <div className="Tags flex justify-between mt-4 inline-block align-middle">
      <div>
        <h2 className="text-xl tracking-wide">Tags</h2>
      </div>

      {TagQuery.allFile.edges.map(({ node }) => (
        <div className="flex-wrap">
          <span
            key={node.id}
            className="bg-gray-600 rounded text-white p-3 m-2"
          >
            {node.relativeDirectory}
          </span>
        </div>
      ))}
    </div>
  );
}
export default Tags;

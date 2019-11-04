import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";

import { Carousel } from "antd";

function FeaturedGallery() {
  const ImgFeatured = useStaticQuery(graphql`
    query FeaturedImages {
      allFile(filter: { absolutePath: { regex: "/walls/featured/" } }) {
        edges {
          node {
            base
            id
            publicURL
            prettySize
            childImageSharp {
              fixed(quality: 100, height: 500) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
        totalCount
      }
    }
  `);

  return (
    <div className="justify-center">
      <h2 className="text-gray-900 font-semibold text-2xl">Featured Gallery</h2>
      <div>
        <Carousel dotPosition="top" effect="fade" autoplay>
          {ImgFeatured.allFile.edges.map(({ node }) => (
            <div className="flex flex-wrap w-full">
              <a
                href={node.publicURL}
                key={node.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex">
                  <Img
                    fixed={node.childImageSharp.fixed}
                    alt={node.base}
                    key={node.id}
                    className="p-4 mt-4 mx-auto h-auto w-72 rounded border-4 border-solid border-gray-700"
                  />
                </div>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedGallery;

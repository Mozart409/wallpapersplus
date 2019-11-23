import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";

import { Carousel } from "antd";

function FeaturedGallery() {
  const ImgFeatured = useStaticQuery(graphql`
    query FeaturedImages {
      allFile(filter: { absolutePath: { regex: "/walls/Featured/" } }) {
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
    <div >
      <h2 className="text-gray-900 font-semibold text-2xl">Featured Gallery</h2>
      <div>
        <Carousel dotPosition="top" effect="fade" autoplay>
          {ImgFeatured.allFile.edges.map(({ node }) => (
            <div key={node.id} className="flex flex-wrap w-full">
              <div className="flex justify-center ">
                <a
                  href={node.publicURL}
                  key={node.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img
                    fixed={node.childImageSharp.fixed}
                    alt={node.base}
                    key={node.id}
                    className="justify-center p-4 mt-4 mx-auto h-auto w-72 rounded border-2 border-solid border-gray-700"
                  />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedGallery;

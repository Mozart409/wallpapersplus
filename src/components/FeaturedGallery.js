import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import { Carousel, Icon } from "antd";

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
              fixed(width: 250) {
                ...GatsbyImageSharpFixed
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
      <div className="">
        <Carousel
          dots="true"
          effect="fade"
          autoplay
          
        >
          {ImgFeatured.allFile.edges.map(({ node }) => (
            <div className="flex">

              <a
                href={node.publicURL}
                key={node.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex">
                  <Img
                    key={node.id}
                    fixed={node.childImageSharp.fixed}
                    className="rounded-lg mx-auto border-2 border-gray-800 my-4"
                    alt={node.base}
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

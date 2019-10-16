import React from "react";
import { graphql, useStaticQuery } from "gatsby";
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
          className="mb-4 bg-gray-200 rounded-lg"
        >
          {ImgFeatured.allFile.edges.map(({ node }) => (
            <div className="flex">
              <Icon
                className="text-center float-left justify-center self-auto"
                style={{ fontSize: "2rem", color: "#3c3c3c" }}
                type="left-circle"
                theme="filled"
                onClick=""
              />
              <a
                href={node.publicURL}
                key={node.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img
                    key={node.id}
                    src={node.publicURL}
                    className="rounded-lg w-64 mx-auto border-2 border-gray-800 my-8"
                    alt={node.base}
                  />
                </div>
              </a>
              <Icon
                className="text-center float-right justify-center"
                style={{ fontSize: "2rem", color: "#3c3c3c" }}
                type="right-circle"
                theme="filled"
                onClick="next()"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedGallery;

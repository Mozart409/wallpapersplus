import React from "react";

import Gallery from "../components/Gallery";
import ToTop from "../components/ToTop";
import AddRepo from "../components/AddRepo";
import Layout from "../components/layout";
import SEO from "../components/seo";

function BrowserAll() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`Wallpapers`]} />
      <div>
        <h1>Browse All</h1>
        <ToTop></ToTop>
        <AddRepo></AddRepo>
        <Gallery></Gallery>
      </div>
    </Layout>
  );
}

export default BrowserAll;

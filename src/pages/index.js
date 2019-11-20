import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import FeaturedGallery from "../components/FeaturedGallery";
import ToTop from "../components/ToTop";
import SearchBar from "../components/SearchBar";

import AddRepo from "../components/AddRepo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `iPhone`,
          `reddit`,
          `jailbreak`,
          `cydia`,
          `sileo`,
          `unc0ver`,
          `Wallpapers`,
          `Wallpaperplus`,
          `iOS`,
          `Gallery`,
          `wallpaper`,
          `image`,
          `images`,
          `sileo`
        ]}
      />

      <ToTop></ToTop>
      
      <AddRepo></AddRepo>
      
      <FeaturedGallery></FeaturedGallery>
      <div className="mb-16"></div>
      <SearchBar></SearchBar>
    </Layout>
  );
}

export default IndexPage;

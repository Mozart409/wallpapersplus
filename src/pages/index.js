import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";
import FeaturedGallery from "../components/FeaturedGallery";
import CookieScript from "../components/CookieScript";
import SearchBar from "../components/SearchBar";
import ToTop from "../components/ToTop";
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
      <SearchBar></SearchBar>
      <AddRepo></AddRepo>
      <FeaturedGallery></FeaturedGallery>
      <Gallery></Gallery>
    </Layout>
  );
}

export default IndexPage;

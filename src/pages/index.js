import React from "react";
import {Link} from "gatsby";

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
          `images`
          ]}
      />

      <ToTop></ToTop>
      <Link 
      className="bg-yellow-500 rounded text-2xl font-semibold text-center text-gray-900 py-2"
      to="/browse-all"
      >
      Browse All Pictures
      </Link>
      <AddRepo></AddRepo>
      
      <FeaturedGallery></FeaturedGallery>
      <div className="mb-16"></div>
      <SearchBar></SearchBar>
    </Layout>
  );
}

export default IndexPage;

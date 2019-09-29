import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="m-auto">
        <Link to="/">
          <h2 className="bg-yellow-400 text-2xl font-bold inline-block p-4">
            Looks like this page is a ghost that got abducted by aliens...
          </h2>
          <h3 className="bg-blue-400 text-xl font-semibold inline-block text-yellow-400 p-2">
            Back Home
          </h3>
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;

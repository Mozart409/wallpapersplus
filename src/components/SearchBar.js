import React from "react";
import algoliasearch from "algoliasearch/lite";
import { Link } from "gatsby";

import {
  InstantSearch,
  SearchBox,
  Hits,
  ClearRefinements,
  RefinementList,
  Configure,
  Pagination,
  poweredBy
} from "react-instantsearch-dom";

import "instantsearch.css/themes/algolia-min.css";

import AlgoliaLogo from "../images/search-by-algolia-light-background.svg";

const searchClient = algoliasearch(
  "PYJXC6GOPX",
  "7870e5b01b45448e5b534f107187975b"
);

function Hit(props) {
  return (
    
      <Link to={props.hit.publicURL}>
        <div className="flex flex-wrap antialiased">
          <img
            src={props.hit.publicURL}
            className="float-right h-48 rounded mx-auto border border-solid border-gray-400"
            alt={props.hit.base}
          />
          <div className="mt-2 ">
            <div className="text-gray-600 uppercase text-xs font-semibold tracking-wide">
              {props.hit.prettySize} &bull; {""}
              {props.hit.extension}
            </div>

            <span className="text-gray-900 text-sm leading-snug overflow-x-auto w-8">
              {props.hit.name}
            </span>
            <br />
            <span className="text-gray-700 text-xs overflow-x-auto">
              {props.hit.relativeDirectory}
            </span>
          </div>
        </div>
      </Link>
    
  );
}

function SearchBar() {
  return (
    <div>
      <InstantSearch indexName="prod_WPLUS_3" searchClient={searchClient}>
        <div className="flex flex-wrap w-full">
          <div className="w-1/1 md:w-1/4">
            <ClearRefinements />
            <h2>Categories</h2>
            <RefinementList attribute="relativeDirectory" />
            <Configure hitsPerPage={8} />
            <img src={AlgoliaLogo} className="w-45 mt-2" alt="" />
          </div>
          <div className="w-1/1 md:w-3/4">
            <SearchBox showLoadingIndicator focusShortcuts={["/"]} />

            <Hits hitComponent={Hit} />
            <Pagination className="mt-4 mx-auto" showFirst={false} />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}

export default SearchBar;

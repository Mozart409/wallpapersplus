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
} from "react-instantsearch-dom";

import AlgoliaLogo from "../images/search-by-algolia-light-background.svg";

const searchClient = algoliasearch(
  "PYJXC6GOPX",
  "7870e5b01b45448e5b534f107187975b"
);

function Hit(props) {
  return (
    <div className="grid mx-auto">
      <Link to={props.hit.publicURL}>
        <div className="antialiased shadow-2xl border mx-auto rounded-lg mx-2 my-4 p-2 bg-white">
          <img
            src={props.hit.publicURL}
            className="rounded-lg w-48 mx-auto border border-solid border-gray-400"
            alt={props.hit.base}
          />

          <div className="p-2">
            <div className="text-sm text-center uppercase leading-relaxed tracking-wide text-gray-600 font-bold">
              {props.hit.relativeDirectory}
            </div>
            <div className="flex">
              <button className="w-full bg-blue-500 hover:bg-transparent font-semibold hover:text-blue-700 text-white mt-2 px-4 border border-blue-500 text-xs rounded">
                <div className="text-gray-200 uppercase text-xs font-semibold tracking-wide">
                  {props.hit.prettySize} &bull; {""}
                  {props.hit.extension}
                </div>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex flex-wrap">
      <InstantSearch indexName="prod_WPLUS_3" searchClient={searchClient}>
        <div className="w-1/1 md:w-1/4">
          <ClearRefinements />
          <h2>Categories</h2>
          <RefinementList
            noResults="No results"
            attribute="relativeDirectory"
          />
          <Configure analytics={true} hitsPerPage={21} />
          <img src={AlgoliaLogo} className="w-45 mt-2 mb-4" alt="" />
        </div>
        <div className="w-1/1 md:w-3/4">
          <SearchBox showLoadingIndicator focusShortcuts={["/"]} />
          <div className="">
            <Hits hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}

export default SearchBar;

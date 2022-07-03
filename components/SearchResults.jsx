import React from "react";
import PaginationButtons from "./PaginationButtons";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg-ml-52">
      <p className="text-gray-600 text-md mb5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results{" "}
        {results.searchInformation?.formattedSearchTime} second
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group flex flex-col">
            <a className="text-sm group-hover:underline" href={result.link}>
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className=" truncate text-xl text-blue-800 font-medium group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <div className="line-clamp-2">{result.snippet}</div>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
};

export default SearchResults;

import React, { useContext } from "react";
import SearchContext from "../SearchContext";

function SearchResultsGallery() {
  const { keyword, keywordSearchComplete, filterLocationComplete } = useContext(
    SearchContext
  );

  if (filterLocationComplete === true && keywordSearchComplete === true) {
    return (
      <>
        <p>You're currently searching for {keyword}</p>
        <p>results go here</p>
      </>
    );
  } else {
    return <> </>;
  }
}

export default SearchResultsGallery;

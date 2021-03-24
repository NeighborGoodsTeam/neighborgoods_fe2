import React, { useState } from "react";
import FilterLocation from "./FilterLocation";
function SearchKeywords() {
  const [keyword, setKeyword] = useState(null);
  const [keywordSearchComplete, setKeywordSearchComplete] = useState(false);

  // on submit render next search station for location
  function handleSubmit(event) {
    event.preventDefault();
    console.log(keyword);
    setKeywordSearchComplete(true);
  }

  // on input field change update form field
  function handleChange(event) {
    setKeyword({ ...keyword, [event.target.id]: event.target.value });
    console.log(keyword);
  }

  // conditional rendering
  if (keywordSearchComplete === false) {
    return (
      <div>
        <h3>What product are you looking for?</h3>
        <form onSubmit={handleSubmit} method="POST">
          <input type="text" id="title" onChange={handleChange} />
          <button type="submit">Next</button>
        </form>
      </div>
    );
  } else {
    return <FilterLocation />;
  }
}

export default SearchKeywords;

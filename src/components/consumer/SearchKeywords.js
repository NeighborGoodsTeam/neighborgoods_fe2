import React, { useContext } from "react";
import axios from "axios";
import SearchContext from "../SearchContext";

// bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//
//
//
function SearchKeywords() {
  const {
    setImportData,
    setKeyword,
    keywordSearchComplete,
    setKeywordSearchComplete,
  } = useContext(SearchContext);

  // on submit render next search station for location
  //
  function handleSubmit(event) {
    event.preventDefault();
    event.persist();
    setKeywordSearchComplete(true);
    getResults()
      .then((result) => {
        setImportData(result.data.businesses);
      })
      .catch((err) => console.error(err));
  }

  // on input field change update form field
  //
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  // data import function
  //
  async function getResults() {
    const result = await axios.get(
      // "http://neighborgoods-api.herokuapp.com/businesses"
      "http://localhost:8000/businesses/"
    );
    return result;
  }

  // conditional rendering
  // display keyword search form by default
  //
  if (keywordSearchComplete === false) {
    return (
      <div className="keyword-form">
        <section className="form">
          <h3>What product are you looking for?</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="keyword">
              <Form.Control
                required
                type="text"
                name="keyword"
                onChange={handleChange}
              />
            </Form.Group>
            <button variant="primary" type="submit">
              Next
            </button>
          </Form>
        </section>
      </div>
    );
  }
  // when keyword search has been complete then hide form
  //
  else {
    return <></>;
  }
}

export default SearchKeywords;

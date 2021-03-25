import React, { useState, useEffect, useContext } from "react";
import SearchContext from "../SearchContext";

// bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//
function FilterLocation() {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [distance, setDistance] = useState(0);
  const [filteredData, setFilteredData] = useState(null);
  const {
    importData,
    keyword,
    keywordSearchComplete,
    setKeywordSearchComplete,
  } = useContext(SearchContext);

  // initial keyword filtration
  //
  function filterResults(arr, str) {
    const filtered = arr.filter((e) => Object.values(e).includes(str));
    console.log(filtered);
    setFilteredData(filtered);
  }
  // switch states with back button
  function handleBack() {
    setKeywordSearchComplete(false);
  }
  //geolocation callback functions for success and failure
  //
  function Coords(geo) {
    let crds = geo.coords;
    setLongitude(crds.longitude);
    setLatitude(crds.latitude);
    console.log(longitude, latitude);
  }

  function Error(err) {
    console.log(`Error${err.code}: ${err.message}`);
  }

  // geolocation side effect on home page render
  //
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(Coords, Error);
    console.log(keyword, importData);
    if (importData !== null) {
      filterResults(importData, keyword);
    }
  }, [importData]);

  // handle form submission
  function handleSubmit(event) {
    setDistance(event.value);
    console.log(distance);
  }
  // conditional rendering
  // if keyword search complete then hide form and show location filter stations
  if (keywordSearchComplete === true) {
    return (
      <div>
        <p> Let the robots use your location, human.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="dist">
            <Form.Control as="select">
              <option value="5">5 miles</option>
              <option value="25">25 miles</option>
              <option value="100">100 miles</option>
              <option value="any">anywhere</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    );
  } else {
    return <></>;
  }
}

export default FilterLocation;

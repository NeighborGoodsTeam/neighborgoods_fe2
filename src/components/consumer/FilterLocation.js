import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SearchContext from "../SearchContext";

// bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//
function FilterLocation() {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [distance, setDistance] = useState(0); // need help with grabbing input values
  const [filteredData, setFilteredData] = useState(null);
  const {
    importData,
    keyword,
    keywordSearchComplete,
    setKeywordSearchComplete,
    filterLocationComplete,
    setFilterLocationComplete,
  } = useContext(SearchContext);

  // google maps distance matrix functionality
  const url =
    "http://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=";
  async function getDistanceMatrix() {
    const key = process.env.REACT_APP_GOOGLEMAPS_KEY;
    const bizlat = filteredData[0].latitude;
    const bizlong = filteredData[0].longitude;
    const result = await axios.get(
      `${url}${latitude},${longitude}&destinations=${bizlat}%2${bizlong}&key=${key}`
    );
    console.log(result);
    return result;
  }
  // need to convert miles to meters and filter results accordingly

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
    console.log(latitude, longitude);
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
    setFilterLocationComplete(true);
    console.log(distance);
  }

  // conditional rendering
  // if keyword search complete then hide form and show location filter stations
  if (keywordSearchComplete === true && filterLocationComplete === false) {
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
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Next
        </Button>
        <button onClick={getDistanceMatrix}>get distance matrix</button>
      </div>
    );
  } else {
    return <></>;
  }
}

export default FilterLocation;

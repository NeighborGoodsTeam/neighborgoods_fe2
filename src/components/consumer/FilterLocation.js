import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchContext from "../SearchContext";

// bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//
function FilterLocation() {
  const [formState, setFormState] = useState({});
  const {
    importData,
    keyword,
    longitude,
    setLongitude,
    latitude,
    setLatitude,
    setFilteredData,
    distancePref,
    setDistancePref,
    keywordSearchComplete,
    setKeywordSearchComplete,
    filterLocationComplete,
    setFilterLocationComplete,
  } = useContext(SearchContext);

  // need to convert miles to meters and filter results accordingly

  // initial keyword filtration
  //
  function filterResults(arr, str) {
    const filtered = arr.filter((e) => Object.values(e).includes(str));
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
  }

  function Error(err) {
    console.log(`Error${err.code}: ${err.message}`);
  }

  // geolocation side effect on home page render
  //
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(Coords, Error);
    if (importData !== null) {
      filterResults(importData, keyword);
    }
  }, [importData]);

  function handleSubmit(event) {
    event.persist();
    event.preventDefault();
    setFilterLocationComplete(true);
  }
  function handleChange(event) {
    setDistancePref({ ...formState, [event.target.id]: event.target.value });
  }

  // conditional rendering
  // if keyword search complete then hide form and show location filter stations
  if (keywordSearchComplete === true && filterLocationComplete === false) {
    return (
      <div>
        <p> Let the robots use your location, human.</p>
        <form onSubmit={handleSubmit}>
          <select
            id="distance"
            onChange={handleChange}
            defaultValue={10}
            required
          >
            <option value={1}>1 mile </option>
            <option value={5}>5 miles </option>
            <option value={25}>25 miles</option>
            <option value={100}>100 miles</option>
          </select>
          <Button variant="primary" onClick={handleBack}>
            Back
          </Button>
          <Link to="/gallery">
            <Button variant="primary" type="submit">
              Next
            </Button>
          </Link>
        </form>
      </div>
    );
  } else {
    return <></>;
  }
}

export default FilterLocation;

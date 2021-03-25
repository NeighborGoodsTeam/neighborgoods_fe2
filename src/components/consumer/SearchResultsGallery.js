import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../SearchContext";

function SearchResultsGallery() {
  const {
    keyword,
    userlongitude,
    userlatitude,
    filteredData,
    keywordSearchComplete,
    filterLocationComplete,
    distancePref,
  } = useContext(SearchContext);
  const [businessResults, setBusinessResults] = useState(null);
  const filteredarr = [];
  var maxdistance = parseInt(distancePref.distance);
  //
  // filter search results by distance specified
  function filterDistance(arr) {
    var lat1 = (userlatitude * Math.PI) / 180;
    var lon1 = (userlongitude * Math.PI) / 180;

    for (let i = 0; i < arr.length; i++) {
      var lat2 = (arr[i].latitude * Math.PI) / 180;
      var lon2 = (arr[i].longitude * Math.PI) / 180;
      var distlat = lat2 - lat1;
      var distlon = lon2 - lon1;
      var a =
        Math.pow(Math.sin(distlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(distlon / 2), 2);
      var c = 2 * Math.asin(Math.sqrt(a));
      var r = 3956;

      const distance = c * r;
      if (distance <= maxdistance) {
        filteredarr.push(arr[i]);
      }
    }
  }
  // find distance of individual property
  function findDistance(e) {
    var lat1 = (userlatitude * Math.PI) / 180;
    var lon1 = (userlongitude * Math.PI) / 180;
    var lat2 = (e.latitude * Math.PI) / 180;
    var lon2 = (e.longitude * Math.PI) / 180;
    var distlat = lat2 - lat1;
    var distlon = lon2 - lon1;
    var a =
      Math.pow(Math.sin(distlat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(distlon / 2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var r = 3956;

    const distance = c * r;
    return distance;
  }
  useEffect(() => {
    filterDistance(filteredData);
    setBusinessResults(filteredarr);
  }, []);
  //
  //

  if (businessResults === null) {
    return (
      <>
        <p>
          You're currently searching for {keyword} but unfortunately there
          aren't any results that match your criteria.
        </p>
      </>
    );
  } else {
    return (
      <>
        <p>Searching for {keyword} in your area</p>

        <div>
          {businessResults.map((e) => {
            const id = e.id;
            return (
              <>
                <Link to={`/business/${id}`} key={id} className="gallery-card">
                  <img src={e.logo} alt={e.name} />
                  <h2>{e.name}</h2>
                  <p>{e.addressOne}</p>
                  <p>{`${e.city}, ${e.state}`}</p>
                </Link>
                <p>{Math.round(findDistance(e))} miles away</p>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default SearchResultsGallery;

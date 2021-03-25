import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

// component imports
import NavigationBar from "./components/static/Navbar";

import Footer from "./components/static/footer";
import Home from "./components/consumer/home";
import SearchKeywords from "./components/consumer/SearchKeywords";
import FilterLocation from "./components/consumer/FilterLocation";
import SearchResultsGallery from "./components/consumer/SearchResultsGallery";
import SearchContext from "./components/SearchContext";

// business component imports
import Login from "./components/business/Login";
import CreateAccount from "./components/business/CreateAccount";
import SignUpBusinessInfo from "./components/business/SignUpBusinessInfo";
import SignUpBusinessLocation from "./components/business/SignUpBusinessLocation";
import SignUpBusinessUploadInventory from "./components/business/SignUpUploadInventory";
import BusinessPage from "./components/business/BusinessPage";

function App() {
  const [keyword, setKeyword] = useState(null);
  const [importData, setImportData] = useState(null);
  const [keywordSearchComplete, setKeywordSearchComplete] = useState(false);
  const [filterLocationComplete, setFilterLocationComplete] = useState(false);
  const [distancePref, setDistancePref] = useState(0);
  const [userlongitude, setUserLongitude] = useState(0);
  const [userlatitude, setUserLatitude] = useState(0);
  const [filteredData, setFilteredData] = useState(null);
  const [user, setUser] = useState(null);
  const [bizInfo, setBizInfo] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  return (
    <div className="App">
      <NavigationBar />
      <Route exact path="/">
        <Home />
      </Route>

      <SearchContext.Provider
        value={{
          importData,
          setImportData,
          keyword,
          setKeyword,
          userlongitude,
          setUserLongitude,
          userlatitude,
          setUserLatitude,
          filteredData,
          setFilteredData,
          distancePref,
          setDistancePref,
          keywordSearchComplete,
          setKeywordSearchComplete,
          filterLocationComplete,
          setFilterLocationComplete,
        }}
      >
        <Route exact path="/search">
          <SearchKeywords />
          <FilterLocation />
        </Route>
        <Route exact path="/gallery">
          <SearchResultsGallery />
        </Route>
      </SearchContext.Provider>

      <Route path="/login" render={() => <Login setUser={setUser} />} />
      <Route
        path="/create-account"
        render={() => <CreateAccount setUser={setUser} />}
      />
      <Route
        path="/sign-up-business-info"
        render={() => <SignUpBusinessInfo setBizInfo={setBizInfo} />}
      />
      <Route
        path="/sign-up-business-location"
        render={(props) => (
          <SignUpBusinessLocation
            user={user}
            bizInfo={bizInfo}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
          />
        )}
      />
      <Route
        path="/sign-up-business-upload-inventory"
        render={(props) => (
          <SignUpBusinessUploadInventory
            user={user}
            bizInfo={bizInfo}
            latitude={latitude}
            longitude={longitude}
          />
        )}
      />
      <Route
        path="/business-page"
        render={() => (
          <BusinessPage />
        )}
        />

      <Footer />
    </div>
  );
}

export default App;

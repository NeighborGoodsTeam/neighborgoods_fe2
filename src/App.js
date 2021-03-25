import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

// component imports
import NavigationBar from "./components/static/Navbar";

import Footer from "./components/static/Footer";
import Home from "./components/consumer/Home";
import SearchKeywords from "./components/consumer/SearchKeywords";
import FilterLocation from "./components/consumer/FilterLocation";
import SearchResultsGallery from "./components/consumer/SearchResultsGallery";
import SearchContext from "./components/SearchContext";

// business component imports
import Login from "./components/business/Login";
import CreateAccount from "./components/business/CreateAccount";
import SignUpBusinessInfo from "./components/business/SignUpBusinessInfo";
import SignUpBusinessLocation from "./components/business/SignUpBusinessLocation";


function App() {
  const [keyword, setKeyword] = useState(null);
  const [importData, setImportData] = useState(null);
  const [keywordSearchComplete, setKeywordSearchComplete] = useState(false);
  const [filterLocationComplete, setFilterLocationComplete] = useState(false);

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
          keywordSearchComplete,
          setKeywordSearchComplete,
          filterLocationComplete,
          setFilterLocationComplete,
        }}
      >
        <Route exact path="/search">
          <SearchKeywords />
          <FilterLocation />
          <SearchResultsGallery />
        </Route>
      </SearchContext.Provider>
      <Route path="/login" render={() => (
          <Login />
      )} />
      <Route path="/create-account" render={() => (
          <CreateAccount />
      )} />
      <Route path="/sign-up-business-info" render={() => (
          <SignUpBusinessInfo />
      )} />
      <Route path="/sign-up-business-location" render={() => (
          <SignUpBusinessLocation />
      )} />

      <Footer />
    </div>
  );
}

export default App;

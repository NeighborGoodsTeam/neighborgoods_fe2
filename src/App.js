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

function App() {
  const [keyword, setKeyword] = useState(null);
  const [importData, setImportData] = useState(null);
  const [keywordSearchComplete, setKeywordSearchComplete] = useState(false);
  const [filterLocationComplete, setFilterLocationComplete] = useState(false);
  const [user, setUser] = useState(null);
  const [bizInfo, setBizInfo] = useState(null);
  const [bizLatLong, setBizLatLong] = useState(null);

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
          <Login setUser={setUser}/>
      )} />
      <Route path="/create-account" render={() => (
          <CreateAccount setUser={setUser}/>
      )} />
      <Route path="/sign-up-business-info" render={() => (
          <SignUpBusinessInfo setBizInfo={setBizInfo}/>
      )} />
      <Route path="/sign-up-business-location" render={(props) => (
          <SignUpBusinessLocation user={user} bizInfo={bizInfo} setBizLatLong={setBizLatLong}/>
      )} />
      <Route path="/sign-up-business-upload-inventory" render={(props) => (
          <SignUpBusinessUploadInventory user={user} bizInfo={bizInfo} bizLatLong={bizLatLong}/>
      )} />

      <Footer />
    </div>
  );
}

export default App;

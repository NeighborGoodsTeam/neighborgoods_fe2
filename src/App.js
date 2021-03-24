import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";

import "./App.css";

// component imports
import NavigationBar from "./components/static/Navbar";
import Footer from "./components/static/Footer";
import Home from "./components/consumer/Home";
import SearchKeywords from "./components/consumer/SearchKeywords";

function App() {
  return (
    // nav
    // footer
    // routes:
    // home
    // search
    // login
    // sign-up
    //

    <div className="App">
      <NavigationBar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/search">
        <SearchKeywords />
      </Route>

      <Footer />
    </div>
  );
}

export default App;

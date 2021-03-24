import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";

import "./App.css";

// component imports
import NavigationBar from "./components/static/Navbar";
import Footer from "./components/static/footer";
import Home from "./components/consumer/home";

// business component imports
import Login from "./components/business/Login";

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
      <Route path="/login" render={() => (
          <Login />
      )} />
      <Footer />
    </div>
  );
}

export default App;

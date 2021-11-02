import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";

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
     </Switch>
   </Fragment>
  );
}

export default App;

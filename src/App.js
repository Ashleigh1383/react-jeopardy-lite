import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Ashley" />}
          />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/jeopardy" component={Jeopardy} />
        </Switch>
      </div>
    );
  }
}
export default App;

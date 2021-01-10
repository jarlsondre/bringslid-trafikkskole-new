import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Prices from "./components/Prices/Prices";
import NavBar from "./components/Navigation/NavBar";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/priser" exact component={Prices} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

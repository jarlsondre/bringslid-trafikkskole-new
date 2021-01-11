import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Prices from "./components/Prices/Prices";
import NavBar from "./components/Navigation/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/Home/News";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <NavBar />

        <div className="row">
          <div className="col-md-4 offset-md-3 bg-light">
            <Switch>
              <Route path="/" exact component={News} />
              <Route path="/priser" exact component={Prices} />
            </Switch>
          </div>
          <div className="col-md-2 bg-light">
            <Sidebar />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

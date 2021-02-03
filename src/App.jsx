import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Prices from "./components/Prices/Prices";
import NavBar from "./components/Navigation/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/Home/News";
import Vehicles from "./components/Vehicles/Vehicles";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <NavBar />

        <div className="row">
          <div
            className="col-lg-4 offset-lg-3"
            style={{ backgroundColor: "WhiteSmoke" }}
          >
            <Switch>
              <Route path="/" exact component={News} />
              <Route path="/priser" exact component={Prices} />
              <Route path="/kjoretoy" exact component={Vehicles} />
            </Switch>
          </div>
          <div
            className="col-lg-2 ml-2"
            style={{ backgroundColor: "WhiteSmoke" }}
          >
            <Sidebar />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

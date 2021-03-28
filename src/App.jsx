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
        <div className="content-row">
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={News} />
              <Route path="/priser" exact component={Prices} />
              <Route path="/kjoretoy" exact component={Vehicles} />
            </Switch>
          </div>
          <div className="side-content">
            <Sidebar />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

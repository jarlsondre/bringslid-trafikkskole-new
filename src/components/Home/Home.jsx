import React, { Component } from "react";
import News from "./News";
import Map from "./Map";
import Offices from "./Offices";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 offset-md-3 bg-light">
            <News />
          </div>
          <div className="col-md-2 bg-light">
            <Map />
            <Offices />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

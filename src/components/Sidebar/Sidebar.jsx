import React, { Component } from "react";

import Contact from "./Contact";
import Map from "./Map";
import Offices from "./Offices";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Contact />
        <Map />
        <Offices />
      </div>
    );
  }
}

export default Sidebar;

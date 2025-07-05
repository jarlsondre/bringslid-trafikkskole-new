import React, { Component } from "react";

import Contact from "./Contact";
import Map from "./Map";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Contact />
        <Map />
      </div>
    );
  }
}

export default Sidebar;

import React, { Component } from "react";
import TeslaImage from "../../images/bringslid_trafikkskole_tesla.jpg";

import Vehicle from "./Vehicle";

class Vehicles extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="mt-3">Kjøretøy</h1>
        <Vehicle image={TeslaImage} name="Tesla Model 3" />
      </div>
    );
  }
}

export default Vehicles;

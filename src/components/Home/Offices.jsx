import React, { Component } from "react";
import OfficeImage from "../../images/offices.jpg";

class Offices extends Component {
  state = {};
  render() {
    return (
      <div className="mt-5">
        <h4>Bilde av kontorene</h4>
        <img src={OfficeImage} alt="Bilde av kontorene" width="100%"></img>
      </div>
    );
  }
}

export default Offices;

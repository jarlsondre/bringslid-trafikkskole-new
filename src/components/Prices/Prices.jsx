import React, { Component } from "react";
import PriceList from "./PriceList";

class Prices extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="mt-3">Priser</h1>
        <p>
          Ved kjøring i Molde legger vi til et kvarter på en dobbelttime. Dette
          vil si at en dobbelttime varer i 105 minutter, i stedet for 90
          minutter som er vanlig. Denne økningen skjer kostnadsfritt.
        </p>
        <PriceList />
      </div>
    );
  }
}

export default Prices;

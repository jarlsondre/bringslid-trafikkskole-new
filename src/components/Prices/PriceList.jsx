import React, { Component } from "react";

import Counter from "./Counter";

class PriceList extends Component {
  state = {
    pricelist: [
      {
        name: "Kjøretime (45 min)",
        price: 685,
        id: 1,
        amount: 0,
      },
      {
        name: "Sikkerhetskurs på øvingsbane inkl. baneleie NAF (glattkjøring)",
        price: 4700,
        id: 2,
        amount: 1,
        maxValue: 1,
      },
      {
        name: "Forbikjøring inkl. teori",
        price: 1500,
        id: 3,
        amount: 1,
        maxValue: 1,
      },
      {
        name: "Risikoteori",
        price: 400,
        id: 4,
        amount: 1,
        maxValue: 1,
      },
      {
        name: "Sikkerhetskurs på landevei",
        price: 6450,
        id: 5,
        amount: 1,
        maxValue: 1,
      },
      {
        name: "Mørkekjøring",
        price: 1500,
        id: 6,
        amount: 1,
        maxValue: 1,
      },
      {
        name: "Leie av bil til førerprøve",
        price: 1500,
        id: 7,
        amount: 1,
        maxValue: 1,
      },
      {
        name: "Oppvarmingstime før oppkjøring (60 min)",
        price: 715,
        id: 8,
        amount: 0,
        maxValue: 1,
      },
    ],
  };

  handleIncrement = (price) => {
    const pricelist = [...this.state.pricelist];
    const index = this.state.pricelist.indexOf(price);
    pricelist[index] = { ...price };
    pricelist[index].amount++;
    this.setState({ pricelist });
  };

  handleDecrement = (price) => {
    const pricelist = [...this.state.pricelist];
    const index = this.state.pricelist.indexOf(price);
    pricelist[index] = { ...price };
    pricelist[index].amount--;
    this.setState({ pricelist });
  };

  getTotalAmount() {
    let totalAmount = 0;
    this.state.pricelist.forEach((a) => (totalAmount += a.price * a.amount));
    return totalAmount;
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Tjeneste</th>
              <th className="text-xs-right">Pris</th>
              <th>Antall</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pricelist.map((service) => {
              return (
                <tr key={service.id}>
                  <td className="align-middle">{service.name}</td>
                  <td className="align-middle">kr {service.price},-</td>
                  <td>
                    <Counter
                      key={service.id}
                      value={service.amount}
                      service={service}
                      onIncrement={this.handleIncrement}
                      onDecrement={this.handleDecrement}
                    />
                  </td>
                </tr>
              );
            })}
            <tr className="bigger-font">
              <td>Totalt</td>
              <td>{this.getTotalAmount()},-</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PriceList;

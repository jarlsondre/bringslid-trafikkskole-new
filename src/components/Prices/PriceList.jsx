import React, { Component } from "react";

class PriceList extends Component {
  state = {
    pricelist: [
      {
        name: "Kjøretime (45 min)",
        price: "625,- pr. stk.",
        id: "1",
      },
      {
        name: "Sikkerhetskurs på øvingsbane inkl. baneleie NAF (glattkjøring)",
        price: "4.400,-",
        id: "2",
      },
      {
        name: "Forbikjøring inkl. teori",
        price: "1.500,-",
        id: "3",
      },
      {
        name: "Sikkerhetskurs på landevei",
        price: "6.450,-",
        id: "4",
      },
      {
        name: "Mørkekjøring",
        price: "1.500,-",
        id: "5",
      },
      {
        name: "Leie av bil til førerprøve",
        price: "1.500,-",
        id: "6",
      },
    ],
  };

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Tjeneste</th>
              <th className="text-xs-right">Pris</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pricelist.map((service) => {
              return (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>kr {service.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PriceList;

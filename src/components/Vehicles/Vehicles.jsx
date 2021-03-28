import React, { Component } from "react";
import TeslaImage from "../../images/bringslid_trafikkskole_tesla.jpg";
import BMWImage from "../../images/bringslidtrafikkskole-bmw.jpg";

import Vehicle from "./Vehicle";

class Vehicles extends Component {
  state = {
    cars: [
      {
        name: "Tesla Model 3",
        image: TeslaImage,
        girtype: "Automat",
        arsmodell: "2020",
        beskrivelse:
          "Dette er Tesla Model 3. Denne bilen er en 2020-modell og er en svært behagelig bil å kjøre. Samtidig så er den veldig sprek og har gode kjøreegenskaper. Bilen er også utstyrt med firhjulstrekk.",
      },
      {
        name: "BMW X1",
        image: BMWImage,
        girtype: "Manuell",
        arsmodell: "2020",
        beskrivelse:
          "Dette er BMW X1. Denne bilen er en 2020-modell og er en enkel bil å kjøre med mye funksjonalitet. Bilen er romslig og man får et godt overblikk over veien da man sitter høyt i bilen. Bilen er utstyrt med firhjulstrekk.",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1 className="mt-3">Kjøretøy</h1>
        <p>Her kan du se bilder av og lese om kjøretøyene våre!</p>
        {this.state.cars.map((car) => {
          return (
            <Vehicle
              name={car.name}
              image={car.image}
              girtype={car.girtype}
              arsmodell={car.arsmodell}
              beskrivelse={car.beskrivelse}
            />
          );
        })}
      </div>
    );
  }
}

export default Vehicles;

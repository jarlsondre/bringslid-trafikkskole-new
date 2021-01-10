import React, { Component } from "react";
import NewsStory from "./NewsStory";

import FireworksImage from "../../images/fireworks.jpg";
import CoronaImage from "../../images/coronavirus.png";
import TeslaImage from "../../images/tesla.png";

class News extends Component {
  state = {
    stories: [
      {
        title: "Nye nettsider!",
        text:
          "Bringslid Trafikkskole har nå fått oppdatert sine nettsider. Dette er vi svært glade for, men siden er fortsatt under utvikling. Dersom noen skulle ha noen tips eller finner mangler på nettsiden så er det bare å si fra, enten på e-post eller via melding.",
        id: 1,
        storyImage: FireworksImage,
      },
      {
        title: "Vi har fått en ny bil!",
        text:
          "Bringslid Trafikkskole har nå fått oppdatert sine nettsider. Dette er vi svært glade for, men siden er fortsatt under utvikling. Dersom noen skulle ha noen tips eller finner mangler på nettsiden så er det bare å si fra, enten på e-post eller via melding.",
        id: 2,
        storyImage: CoronaImage,
      },
      {
        title: "Hei, velkommen til oss som kunde!",
        text:
          "Bringslid Trafikkskole har nå fått oppdatert sine nettsider. Dette er vi svært glade for, men siden er fortsatt under utvikling. Dersom noen skulle ha noen tips eller finner mangler på nettsiden så er det bare å si fra, enten på e-post eller via melding.",
        id: 3,
        storyImage: TeslaImage,
      },
    ],
  };
  render() {
    return (
      <div className="mt-2">
        <h1>Nyheter</h1>
        {this.state.stories.map((story) => {
          return (
            <NewsStory
              title={story.title}
              text={story.text}
              key={story.id}
              storyImage={story.storyImage}
            />
          );
        })}
      </div>
    );
  }
}

export default News;

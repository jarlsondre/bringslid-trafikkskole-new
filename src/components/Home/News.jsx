import React, { Component } from "react";
import NewsStory from "./NewsStory";

import TeslaImage from "../../images/yvonne_og_tesla.jpg";

class News extends Component {
  state = {
    stories: [
      {
        title: "Velkommen til Bringslid Trafikkskole",
        text:
          "Hei, og velkommen til Bringslid Trafikkskole. Vi er en trafkkskole som holder til i HTL-bygget i Elnesvågen. Kjøreskolen drives av Yvonne Bringslid som har vært kjørelærer i over 20 år. Vi tilbyr konkurransedyktige priser og opplæring av høyeste kvalitet. For å bestille time, kontakt Yvonne på 91 51 40 04 eller på yvonne@bringslidtrafikkskole.no",
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

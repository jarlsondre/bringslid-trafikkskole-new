import React, { Component } from "react";
import NewsStory from "./NewsStory";

import TeslaImage from "../../images/yvonne_og_tesla.jpg";

class News extends Component {
  state = {
    stories: [
      {
        title: "Velkommen til Bringslid Trafikkskole",
        text: `Hei, og velkommen til Bringslid Trafikkskole. Vi holder til i Elnesvågen. Ta
        kontakt for opplæring på 91 51 40 04.`,
        storyImage: TeslaImage,
      },
    ],
  };
  render() {
    return (
      <div className="mt-2">
        {this.state.stories.map((story, key) => {
          return (
            <NewsStory
              title={story.title}
              text={story.text}
              key={key}
              storyImage={story.storyImage}
            />
          );
        })}
      </div>
    );
  }
}

export default News;

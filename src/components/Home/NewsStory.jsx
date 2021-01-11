import React, { Component } from "react";

class NewsStory extends Component {
  state = {};

  getImage() {
    return this.props.storyImage === undefined ? null : (
      <img src={this.props.storyImage} alt="NewsStory" className="news-image" />
    );
  }

  render() {
    return (
      <div className="mt-5 ">
        <h3>{this.props.title}</h3>
        {this.getImage()}
        <p className="mt-2">{this.props.text} </p>
      </div>
    );
  }
}

export default NewsStory;

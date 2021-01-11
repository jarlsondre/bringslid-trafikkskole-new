import React, { Component } from "react";

class Map extends Component {
  state = {};

  render() {
    return (
      <div>
        <h4 className="mt-5">Lokasjon</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455.1001386234776!2d7.1497177292890655!3d62.853868210833696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46115a17796a375b%3A0xbefd9509f35c95de!2sHauk%C3%A5sstien%207%2C%206440%20Elnesv%C3%A5gen!5e0!3m2!1sen!2sno!4v1609925703107!5m2!1sen!2sno"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="map"
        ></iframe>
      </div>
    );
  }
}

export default Map;

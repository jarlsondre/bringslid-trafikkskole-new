import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <div className="inner">
          <h1 style={{ wordWrap: "break-word" }}>Kontaktinfo</h1>
          <p>E-post: yvonne@bringslidtrafikkskole.no</p>
          <p>Telefon: 91514004</p>
        </div>
      </div>
    );
  }
}

export default Contact;

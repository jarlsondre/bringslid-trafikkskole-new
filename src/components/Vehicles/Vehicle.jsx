import React, { Component } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
  }

  state = {
    modalIsOpen: false,
    height: 300,
    width: 300,
  };

  openModal() {
    const modalIsOpen = true;
    this.setState({ modalIsOpen });
  }

  closeModal() {
    const modalIsOpen = false;
    this.setState({ modalIsOpen });
  }

  render() {
    return (
      <div className="vehicle">
        <h3>{this.props.name}</h3>
        <img
          onClick={() => this.openModal()}
          className="vehicle-image"
          src={this.props.image}
          alt=""
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          className="center"
          style={{
            overlay: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "70%",
            },
          }}
        >
          <img
            ref={this.imgRef}
            style={{ width: "100%" }}
            src={this.props.image}
            alt=""
          />
        </Modal>
        <p>
          Girtype: {this.props.girtype} <br />
          Årsmodell: {this.props.arsmodell}
        </p>
        <p>{this.props.beskrivelse}</p>
      </div>
    );
  }
}

export default Vehicle;

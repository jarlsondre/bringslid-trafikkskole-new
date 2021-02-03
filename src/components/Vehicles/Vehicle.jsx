import React, { Component } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");

class Vehicle extends Component {
  state = {
    modalIsOpen: false,
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
      <div>
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
        >
          {" "}
          <img style={{ maxWidth: "800px" }} src={this.props.image} alt="" />
        </Modal>
      </div>
    );
  }
}

export default Vehicle;

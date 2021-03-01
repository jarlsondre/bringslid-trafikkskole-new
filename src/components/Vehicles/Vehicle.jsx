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
          className="center"
          style={{
            overlay: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {},
          }}
        >
          <img
            ref={this.imgRef}
            style={{ maxWidth: "800px", width: "100%" }}
            src={this.props.image}
            alt=""
          />
        </Modal>
      </div>
    );
  }
}

export default Vehicle;

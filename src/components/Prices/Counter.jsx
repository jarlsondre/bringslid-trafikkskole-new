import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.service);
          }}
        >
          -
        </button>
        {this.props.value}
        <button
          onClick={() => {
            this.props.onIncrement(this.props.service);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;

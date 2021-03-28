import React, { Component } from "react";

class Counter extends Component {
  state = {};

  getDisabled(value, limit) {
    return value === limit ? "true" : "";
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.service);
          }}
          disabled={this.getDisabled(
            this.props.value,
            this.props.service.maxValue
          )}
          className="btn btn-primary counter-button"
        >
          +
        </button>
        <span
          className="bigger-font counter-number"
          style={{ display: "block" }}
        >
          {this.props.value}
        </span>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.service);
          }}
          disabled={this.getDisabled(this.props.value, 0)}
          className="btn btn-danger counter-button"
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;

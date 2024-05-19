import React, { Component } from "react";

export default class ChageStateCl extends Component {
  state = {
    city: "Zagreb",
    state: "Hrvatska",
  };

  changeState = () => {
    const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
    this.setState({ city: newCity });
  };
  render() {
    return (
      <div>
        <h1>Grad: {this.state.city}</h1>
        <h1>Država:{this.state.state}</h1>
        <button onClick={this.changeState}>Drugi grad</button>
      </div>
    );
  }
}

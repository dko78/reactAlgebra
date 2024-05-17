import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super(); /* Funckija za nadgledanje da omogući da def  state */
    this.state = { poruka: "Pozz posjetiocu." };
  }
  render() {
    return <div>{this.state.poruka}</div>;
  }
}

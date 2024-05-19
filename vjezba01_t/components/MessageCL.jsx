import React, { Component } from "react";

export default class MessageCL extends Component {
  constructor() {
    //moraš pozvati konsktruktor i super funciju
    super();
    this.state = { poruka: "Pozdrav klasa posjetioncu" };
  }
  render() {
    return <div>{this.state.poruka}</div>;
  }
}

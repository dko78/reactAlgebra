import React, { Component } from "react";

export default class HelloCl extends Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.prezime}</p>
        {/* u klasnompricipu ne trebaš props u parametre stviti nego this. */}
        <p>{this.props.children}</p>
      </div>
    );
  }
}

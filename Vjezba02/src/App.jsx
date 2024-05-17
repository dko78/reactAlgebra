import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    /*
    this.state = {
      osobe: [{ ime: "Igor" }, { ime: "Maja" }, { ime: "Dabo" }],
    };
    */
    this.state = {
      osobe: [{ ime: "Igor" }, { ime: "Maja" }, { ime: "Dabo" }],
    };
  }
  render() {
    /* return (
      <>
        <div>Pozz {this.state.ime}</div>
        <button
          onClick={() => {
            this.setState(
              () => {
                return { ime: "Jura" };
              },
              () => {
                console.log(this.state.ime); //console log mora biti unutar setState
              }
            ); //moras sa setSate, ne state
          }}>
          Promijeni ime
        </button>
      </>
    );
    */
    return (
      <>
        <div>
          {this.state.osobe.map((osoba) => {
            return <p key={Math.random()}>{osoba.ime}</p>; //ovo se ispituje u returnu
          })}
        </div>
      </>
    );
  }
}

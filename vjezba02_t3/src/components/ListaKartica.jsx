import React, { Component } from "react";

export default class ListaKartica extends Component {
  render() {
    const { osobe } = this.props;
    return (
      <div>
        {osobe.map((osoba) => {
          //ne mozeš uklasamo samo osobu posalti, moras this.props
          return <p key={osoba.id}>{osoba.first_name}</p>;
        })}
      </div>
    );
  }
}

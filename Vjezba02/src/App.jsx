import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      osobe: [],
    };
  }

  componentDidMount() {
    fetch(" https://reqres.in/api/users").then((res) =>
      res.json().then((data) => this.setState(
    
        
      )
    );
  }

  render() {
    return (
      <>
        <div>
          {this.state.osobe.map((osoba) => {
            return <p key={osoba.id}>{osoba.first_name}</p>;
          })}
        </div>
      </>
    );
  }
}

//mora biti kao klasa HOC
import React from "react";

const HOC = (Komponenta, ekstenzija) => {
  return class extends React.Component {
    state = {
      podaci: [],
      upit: "",
    };
    componentDidMount() {
      fetch(`https://jsonplaceholder.typicode.com/${ekstenzija}`)
        .then((res) => res.json())
        .then((data) => this.setState({ podaci: data })); //dest. samo podatke mijenjamo unutar state
    }

    handleChange = (e) => {
      this.setState({ ...this.state, upit: e.target.value });
    };

    render() {
      let { podaci, upit } = this.state;

      podaci = podaci.filter((podatak) => {
        if (ekstenzija === "users") {
          const { name } = podatak;
          return name.toLowerCase().indexOf(upit.toLowerCase()) >= 0;
        }
        if (ekstenzija === "todos") {
          const { title } = podatak;
          return title.toLowerCase().indexOf(upit.toLowerCase()) >= 0;
        }

        return true;
      });
      //.slice(0, 10) //2024-06-11 zadatak

      return (
        <>
          <input type="text" value={upit} onChange={this.handleChange} />
          <Komponenta podaci={podaci} />
        </>
      );
    }
  };
};

export default HOC;

import React from "react";

const HOC = (komponenta, ekstenzija) => {
  return class extends React.Component {
    state = {
      podaci: [],
      upit: "",
    };

    componentDidMount() {
      //fetch ovisi o ekstenziji
      fetch(`https://jsonplaceholder.typicode.com/users/${ekstenzija}`)
        .then((res) => res.json())
        .then((data) => this.setState({ podaci: data }));
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

        if (ekstenzija === "posts") {
          const { title } = podatak;
          return title.toLowerCase().indexOf(uput.toLowerCase()) >= 0;
        }
        return true;
      });

      return (
        <>
          <input type="text" value={upit} onChange={this.handleChange} />
          <komponenta podaci={podaci} />
        </>
      );
    }
  };
};

export default HOC;

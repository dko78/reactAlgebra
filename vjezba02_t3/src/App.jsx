import React, { Component } from "react";
import ListaKartica from "./components/ListaKartica";
import SearchPolje from "./components/SearchPolje";

//klasne komponenete
export default class App extends Component {
  //construktor se prvi pokreće kad se incijalizirta početo stanje
  //2 ide render
  //pa componenet did mount
  constructor() {
    super();

    this.state = {
      osobe: [],
      searchPolje: "", //da mogu pristupiti u renderu od svugdje
    };
  }

  componentDidMount() {
    //sa setState
    fetch("https://reqres.in/api/users").then((res) =>
      res.json().then((data) =>
        this.setState(
          //radi rerender funkcije da bi zapiso to sa set state
          () => {
            //prvo update funkcija koja vraća osobe, pa callback retutn
            return { osobe: data.data };
          },
          () => {
            console.log(this.state);
          }
        )
      )
    );
  }

  //handler funkcija
  onFilterChange = (event) => {
    //anonimna funkcija onChange na inputu kao event, nije spremljena u varijablu. Vrti se svaki put ispočetka
    //bolje ovako
    const searchPolje = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchPolje };
    });
  };

  render() {
    const { osobe, searchPolje } = this.state;
    const { onFilterChange } = this;
    const filter = osobe.filter((osoba) => {
      return osoba.first_name.toLowerCase().includes(searchPolje);
    });

    return (
      <>
        <SearchPolje onFilterChange={onFilterChange} />
        {/* koja glupist on filer change je destr. this */}
        <ListaKartica osobe={filter} />
        {/* Filter je u biti lista koje glupost kako se to naziva. to je definirano gore  const filter = osobe.filter((osoba) => {... */}
      </>
    );
  }
}

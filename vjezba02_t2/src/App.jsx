import React, { Component } from "react";
//klasne komponenete
export default class App extends Component {
  //construktor se prvi pokreće kad se incijalizirta početo stanje
  //2 ide render
  //pa componenet did mount
  constructor() {
    super();
    // this.state = { ime: "Dalibor" };
    /*
    this.state = {
      osobe: [
        { ime: "Igor" },
        { ime: "Maja" },
        { ime: "Sanja" },
        { ime: "Dalibor" },
      ],
    };
    */ //liste
    //fetch https://reqres.in/api/users, moeras lifecycle, kad se komponenta učita
    this.state = {
      osobe: [],
      searchPolje: "", //da mogu pristupiti u renderu od svugdje
    };
  }

  /*render() {
    
    return (
      <>
        <p>Pozz {this.state.ime}</p>
        <button
          onClick={() => {
            // this.setState({ ime: "Jura" }); // asinkr. funkcija.kod klasnog pristupa, mijenjamo vrijednos ovako
            //tu je problem jer se na azurira sinkrona cl i asimh. setState pa trebaš callBack funkciju
            this.setState(
              () => {
                return { ime: "Jura" };
              }, //tu ide callback funckija
              () => {
                console.log(this.state.ime);
              }
            );
          }}>
          Promijen ime
        </button>
      </>
    );
  }
  */
  /*--ovo je za liste
  render() {
    return (
      <>
        <div>
          {this.state.osobe.map((osoba) => {
            return <p key={Math.random()}>{osoba.ime}</p>;
          })}
        </div>
      </>
    );
  }
  */
  componentDidMount() {
    /* fetch("https://reqres.in/api/users").then((res) =>
      res.json().then((data) => console.log(data))
    );
    */
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
        <input
          type="search"
          className="search-box"
          placeholder="pretraži"
          onChange={onFilterChange}
        />
        <div>
          {filter.map((osoba) => {
            return <p key={osoba.id}>{osoba.first_name}</p>;
          })}
        </div>
      </>
    );
  }
}

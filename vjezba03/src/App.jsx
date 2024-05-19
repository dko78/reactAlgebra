import { useState, useEffect } from "react"; //jer je statfull komponeneta

import SearchPolje from "./components/SearchPolje";

import ListaKartica from "./components/ListaKartica";

const App = () => {
  const [searchPolje, setSearchPolje] = useState(""); //objekt koja ima sadašnju i funckiju koja će imatu buduću vrijednost, koju ćemo definirati
  console.log(searchPolje);
  const [osobe, setOsobe] = useState([]);

  useEffect(() => {
    /* prvo sam funkcija, onda lista zavisnosti u [] */
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setOsobe(data.data));
  }, []);
  const onFilterChange = (event) => {
    const searchPoljeString = event.target.value.toLowerCase();
    setSearchPolje(searchPoljeString);
  };

  const filter = osobe.filter((osoba) => {
    return osoba.first_name.toLowerCase().includes(searchPolje);
  });

  return (
    <div>
      <SearchPolje onFilterChange={onFilterChange} />
      {/* pazi ne searchPolje nego SearchPolje */}
      <ListaKartica osobe={filter} />
    </div>
  );
};

export default App;

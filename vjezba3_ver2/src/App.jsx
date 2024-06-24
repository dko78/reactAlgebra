import { useState, useEffect } from "react";

const App = () => {
  const [searchPolje, setSearchPolje] = useState("");
  const [osobe, setOsobe] = useState([]);
  const [filter, setFilter] = useState(osobe);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setOsobe(data.data));
  }, []);

  useEffect(() => {
    const noviFilter = osobe.filter((osoba) => {
      return osoba.first_name.toLowerCase().includes(searchPolje);
    });
    setFilter(noviFilter);
  }, [osobe, searchPolje]);

  const onFilterChange = (e) => {
    const searchPoljeString = e.target.value.toLowerCase();
    setSearchPolje(searchPoljeString);
  };

  const handleTrazi = (name, e) => {
    alert(name + e.target);
  };

  return (
    <>
      <input
        type="search"
        className="search-box"
        placeholder="pretraži"
        onChange={onFilterChange}
      />
      <button
        onClick={(e) => {
          handleTrazi(searchPolje, e);
        }}>
        Traži
      </button>
      <hr />
      <div className="kartice">
        {osobe.map((osoba) => {
          return <div key={osoba.id}>{osoba.first_name}</div>;
        })}
      </div>
      <hr />
      <div className="kartice">
        {filter.map((osoba) => {
          return <div key={osoba.id}>{osoba.first_name}</div>;
        })}
      </div>
      <hr />
      <h2>Sa butonom</h2>
      <hr />
      <p>Rezultat</p>
    </>
  );
};

export default App;

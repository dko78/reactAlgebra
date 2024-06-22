import { useEffect, useState } from "react";
//vjezba, šitanej iz lokalnog jsona i prikaz
//pazi json mora biti u public
const App = () => {
  const [osobe, setOsobe] = useState([]);

  useEffect(() => {
    fetch("./osobe.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOsobe(data);
      });
  }, []);

  return (
    <>
      <h1>Imena iz lokalni json file </h1>

      <div>
        {osobe.map((osoba) => {
          return (
            <div key={crypto.randomUUID()}>
              <p>
                {osoba.ime} {osoba.prezime}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;

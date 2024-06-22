import { useEffect, useState } from "react";
import dataImena from "./Data/imena.json";

const App = () => {
  const [imena, setImena] = useState([]);

  //const [osobe, setOsobe] = useState([]);

  /*  useEffect(() => {
    fetch(dataImena)
      .then((res) => res.json())
      .then((data) => setImena(data.data));
  }, []);
  //console.log(imena);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setOsobe(data.data));
  }, []);
 */
  return (
    <>
      <h1>Imena iz lokalni json file </h1>
      <div>
        {dataImena.map((osoba) => {
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

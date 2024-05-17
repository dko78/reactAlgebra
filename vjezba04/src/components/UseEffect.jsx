import { useState, useEffect } from "react";

const App = () => {
  const [windowWith, setWindowWith] = useState(window.innerWidth);

  const [ime, setIme] = useState("");

  useEffect(() => {
    console.log("Učitavam se pri svakoj promjeni rendera");
    window.addEventListener("resize", updateWindowWith);
  });

  const updateWindowWith = () => {
    setWindowWith(window.innerWidth);
  };
  /* use efekt moze samo 1 prilikom učitavanja mountanja komponenete
  ono što je componenet didimounth u kalsnom
*/
  useEffect(() => {
    console.log("Učitavam se samo 1 kod mountanja");
  }, []); //zato je [] ovo prazno

  /* kad se ime mijenja ime*/
  useEffect(() => {
    console.log(`ime je sad ${ime}`);
  }, [ime]);
};

return (
  <div>
    <p>Širina prozora:{windowWith}</p>
    <input
      type="text"
      value={ime}
      onChange={(event) => setIme(event.target.value)}></input>
  </div>
);

export default App;

import { useState, useEffect } from "react";

const UseEffect = () => {
  const [windowWith, setWindowwith] = useState(window.innerWidth);
  const [ime, setIme] = useState("");

  useEffect(() => {
    console.log("Učitavam se pri svakoj promjeni rendera");
    window.addEventListener("resize", updateWindowWith);
  });

  useEffect(() => {
    console.log("učitavam se samo prilikom mountanja stranice");
  }, []);

  //pokreće se prilikom učitavanja[] ili kad se vrijednost varijable promijeni
  useEffect(() => {
    console.log(`Ime je sad ${ime}`);
  }, [ime]);

  const updateWindowWith = () => {
    setWindowwith(window.innerWidth);
  };

  return (
    <>
      <p>Širina prozora: {windowWith}</p>
      <input
        type="text"
        value={ime}
        onChange={(event) => setIme(event.target.value)}
      />
    </>
  );
};

export default UseEffect;

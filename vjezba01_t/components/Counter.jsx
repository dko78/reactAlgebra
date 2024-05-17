import { useState, useEffect } from "react";

//use state hook prvo import

const Counter = () => {
  /* 
  let brojac = 0;
  const uvecaj = () => {
    brojac = brojac + 1;
    console.log(brojac);
  }; stari pristup, nema render
   */
  //varijablu definiramo preko use state
  //seter funkicja, to služi da mozeš mijenajti vrijednost varijable, kad s okine se okine
  //ona pokreće rerender
  //hookovi su async
  //seter nije
  const [brojac, setBrojac] = useState(0); //postavljaš početnu vrijednost

  const uvecaj = () => {
    setBrojac((prevBrojac) => prevBrojac + 1); //preveous brojac, uzima prijašnju vrijesnost
  };

  const umanji = () => {
    setBrojac((prevBrojac) => prevBrojac - 1);
  };

  useEffect(() => {
    console.log(brojac);
  }, [brojac]); //definira callback funckiju i listu zavisnosti, kad će se pokrenuti
  //ono što je u listi zavisnoti react prati, ako e ona promijeni use effect će e promijeniti
  return (
    <>
      <div>Brojac {brojac}</div>
      <br />
      <button onClick={uvecaj}>Dodaj 1</button>
      <br />
      <button onClick={umanji}>Umanji 1</button>
    </>
  );
};

export default Counter;

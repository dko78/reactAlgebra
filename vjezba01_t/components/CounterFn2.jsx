import { useState, useEffect } from "react";

const CounterFn2 = () => {
  const [brojac, setBrojac] = useState(0); //sa setBrojac kad se pokrene onda mijenaj vrijednost varijable brojac

  const uvecaj = () => {
    //setBrojac(brojac + 1); //pokreće seter funckiju
    setBrojac((prevBrojac) => prevBrojac + 1); //pokreće seter funckiju
    console.log(brojac);
  };

  useEffect(() => {
    console.log(brojac); //bez obzira što je cl sinkrona ona se nalazi u asinkronoj fuinkciji
  }, [brojac]); //da je lista zavisnosti ostala prazna onda bi se to okinulo samo kad se aplikacija učitava

  return (
    <>
      <div>Brojac-2: {brojac}</div>
      <button onClick={uvecaj}> Dodaj 1 FN</button>
    </>
  );
};

export default CounterFn2;

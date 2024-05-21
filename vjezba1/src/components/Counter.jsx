import { useState, useEffect, useCallback } from "react";

const Counter = ({ korak }) => {
  const [brojac, setBrojac] = useState(0);

  const uvecaj = useCallback(() => {
    //za memoriiranje funkcija, ponocno se koristi ako se samo neka zavisna vrijednost promijeni
    //za optimizaciju
    setBrojac((prevBrojac) => prevBrojac + korak);
  }, [korak]);

  const umanji = useCallback(() => {
    setBrojac((prevBrojac) => prevBrojac - korak);
  }, [korak]);

  useEffect(() => {
    console.log(brojac);
  }, [brojac]);

  return (
    <>
      <div>Brojac {brojac}</div>
      <br />
      <button onClick={uvecaj}>Dodaj za {korak}</button>
      <br />
      <button onClick={umanji}>Umanji za {korak}</button>
    </>
  );
};

export default Counter;

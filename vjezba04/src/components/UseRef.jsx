import { useState, useRef } from "react";
import { VscLaw } from "react-icons/vsc";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null); //postavi useref na null
  const brojRendera = useRef(0);

  console.log(inputRef);
  const handleButtonClick = () => {
    const currentInputValue = inputRef.current.value; //pazi nije kao evant.target.value
    //azuriramo vrijednost input polja u varijablu inputValue
    //koristeći input ref vrijednost koja će nam između rendera biti zapisana
    // u var. currentInputValue
    setInputValue(currentInputValue);
    //zapis novog rendera
    brojRendera.current++; //koliko puta smo stisnuli gumb
    inputRef.current.value = ""; //čistim polje
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Unesite nešto" />
      <button onClick={handleButtonClick}>Dobavi i ažuriraj vrijednosti</button>
      <p>Trenutna vrijednost input polja:{inputValue}</p>
      <p>Broj rendera :{brojRendera.current}</p>
    </div>
  );
};

export default UseRef;

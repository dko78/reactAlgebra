import React, { useState } from "react";

const App = () => {
  //const [count, setCount] = useState(4); //setCount je funkcija koja dozvoljava da se varijabla cunt uzurira
  //ovako kako je gore definirano svki put kad se renderira postvlja na 4, to ako je složena operacija niej dobro pa je bolje preko funnkcije.
  //tad samo 1

  const [count, setCount] = useState(() => {
    //izvršava se samo jednom, ako naveeš tu u funciji, kad se starnica renderira
    console.log("run function");
    return 4;
  });

  const [theme, setTheme] = useState("blue");

  const [state, setState] = useState({ count1: 4, theme1: "blue" });
  const count1 = state.count1;
  const theme1 = state.theme1;

  const [user, setUser] = useState({ name: "", city: "", age: 50 });
  console.log(user);

  //isto ovo sa userom ali funckija, da se izvrši jenom a ne svaki put kad se renderira

  const handleChange = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, name: e.target.value };
    });
  };
  function decrementCount() {
    // ovako ne raditi nego preko funcije setCount(count - 1);
    setCount((prevCount) => {
      return prevCount - 1;
    }); //miće themu, u objektima samo mjenjaš jedno, ostalo se pregazi ovako
  }

  function incrementCount() {
    setCount((prevCount) => {
      setTheme("red");
      return prevCount + 1;
    });
  }

  function decrementCount2() {
    // ovako ne raditi nego preko funcije setCount(count - 1);
    setState((prevState) => {
      //return { count1: prevState.count1 - 1 };
      return { ...prevState, count1: prevState.count1 - 1 }; //spread operator moraš dati ako zelis zadati sve vrijednosti objekta prije
    });
  }

  function incrementCount2() {
    setState((prevState) => {
      return { count1: prevState.count1 + 1 };
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
      <hr></hr>
      <button onClick={decrementCount2}>-</button>
      <span>{count1}</span>
      <span>{theme1}</span>
      <button onClick={incrementCount2}>+</button>
      <hr />
      <form>
        <input type="text" onChange={handleChange} placeholder="Vaše ime" />
      </form>
    </>
  );
};

export default App;

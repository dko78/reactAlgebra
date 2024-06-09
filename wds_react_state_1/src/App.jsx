import { useState } from "react";

function countInitial() {
  console.log("run");
  return 4;
}

const App = () => {
  //ovako se samo jednom okida
  /*
  const [count, setCount] = useState(() => {
    console.log("run");
    return 4;
  }); 
  */

  //ako s desne strane koristiš dukniju ond svaki put kas se promijeni count
  //const [count, setCount] = useState(countInitial());

  //ako imaš objekt
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const [theme, setTheme] = useState("Blue");
  const count = state.count;
  //const theme = state.theme;
  /* ne objekt
  function decrementCount() {
    //moraš funckiju koristiti
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  function incrementCount() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
*/
  //objekti setState
  function decrementCount() {
    setState((prevState) => {
      //! pazio ako imaš objekrt u use state prvo spread
      return { ...prevState, count: prevState.count - 1 };
    });
    setTheme(() => {
      return "yellow";
    });
  }

  function incrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default App;

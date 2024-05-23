import { useReducer } from "react";

const reducer = (state, action) => {
  //state trebnutno stanje
  //action je objekt kojikaze što treba
  switch (action.type) {
    case "UVEĆAJ":
      return { brojac: state.brojac + 1 };
    case "SMANJI":
      return { brojac: state.brojac - 1 };
    default:
      return state;
  }
};

const UseReducerPrimjer = () => {
  return (
    <div>
      <p>BROJAC:{state.brojac}</p>
      <button onClick={() => dispatch({ type: "SMANJI" })}>SMANJI</button>
      <button onClick={() => dispatch({ type: "UVEĆAJ" })}>UVEĆAJ</button>
    </div>
  );
};

export default UseReducerPrimjer;

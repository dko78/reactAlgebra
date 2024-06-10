import React, { useState } from "react";
import FunctionContextComponent from "./components/FunctionContextComponent";

export const ThemeContext = React.createContext();

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toogleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme}>Toogle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default App;

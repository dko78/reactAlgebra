import React from "react";
import { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
//napravi custom hook, kao funckiju wrapper da mozeš izvana dohatiti
export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toogleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toogleTheme}>
          {children}
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

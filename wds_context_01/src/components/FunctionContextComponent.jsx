import React, { useContext } from "react";

import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionContextComponent = () => {
  const darkTheme = useTheme(); //bitno da useContext napraviš
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    background: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "3rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div style={themeStyles}> Function Theme</div>
    </>
  );
};

export default FunctionContextComponent;

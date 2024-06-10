import React, { useContext } from "react";

import { ThemeContext } from "../App";

const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext); //bitno da useContext napraviš
  const themeStyles = {
    backgrounColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "3rem",
    margin: "2rem",
  };

  return <div style={themeStyles}> Function Theme</div>;
};

export default FunctionContextComponent;

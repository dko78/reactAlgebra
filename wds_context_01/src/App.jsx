import React from "react";
import FunctionContextComponent from "./components/FunctionContextComponent";

import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
};

export default App;

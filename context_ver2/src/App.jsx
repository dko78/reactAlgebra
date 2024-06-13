import React from "react";
import ComponentA from "./Components/ComponentA";
/*
PROVIDER COMPONENET
1) import {createContext} from 'react'
2) export const MyContext = createContext()
3) <MyContext.Provider value={value}>
   <Child />
   </MyContext.Provider>

CONSUMER COMPONENTS 
1) import React, {useContext} from 'react';
   import {MyContext} from './ComponentA;
2) const value = userContext(MyContext)  
*/
const App = () => {
  return (
    <div>
      <ComponentA />
    </div>
  );
};

export default App;

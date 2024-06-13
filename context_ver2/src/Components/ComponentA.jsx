import ComponentB from "./ComponentB";
import { useState, createContext } from "react";

export const UserContext = createContext();
//komponenta A postaje Provider komponenta
const ComponentA = () => {
  const [user, setUser] = useState("Dalibor");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;

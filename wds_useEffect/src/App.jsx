import React from "react";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";

const App = () => {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((data) => setItems(data)); //consoleLog(data)
    /* ovo se na kraju izvrši,  to je cleanUp
      return()=> {
        console.log("return from resource change")}
      */
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("Posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>

      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default App;

import React from "react";

const App = () => {
  return (
    <>
      <form action="">
        <label htmlFor="user">GitHub username:</label>
        <div>
          <input type="text" id="user" placeholder="e.g. facebook" />
        </div>
        <div>
          <button>GO!</button>
        </div>
      </form>
    </>
  );
};

export default App;

import React, { useState } from "react";

const MyComponent = () => {
  const [foods, setFoods] = useState(["Jabuka", "Banana", "Šljiva"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]); //mora biti funckija, f je previous state
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index)); //_ to znači da parmetara proslijeđen funckiji je ignoriran
  }

  return (
    <>
      <h2>Lista voća</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name"></input>
      <button onClick={handleAddFood}>Add food</button>
    </>
  );
};

export default MyComponent;

import { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={handleSumbit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
        {/* vrijednost labela je newItem a kad je ? pa onChange... */}
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default NewTodoForm;

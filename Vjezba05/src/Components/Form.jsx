import React from "react";

import { FaPlusSquare } from "react-icons/fa";
const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (event) => {
    const inputText = event.target.value;
    setInputText(inputText);
    console.log(inputText);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    if (inputText.trim() === "") {
      alert("ne moze prazmno");
      return;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        type="text"
        value={inputText}
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button
        className=" todo-button"
        type="submit"
        onClick={submitTodoHandler}>
        <FaPlusSquare />{" "}
      </button>
    </form>
  );
};

export default Form;

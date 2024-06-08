import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  //vrijednost varijable new item mijenjaš samo funkcijom setNewitem
  //a kad e okida...dvaki put kad upišeš nešto u input.id = item, zato treabš i event handler, on
  //const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  /*
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; //ovo je važno ako zeliš promijeniti samo 1 svojstvo
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
*/
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo list</h1>
      <TodoList todos={todos} />
    </>
  );
};

export default App;

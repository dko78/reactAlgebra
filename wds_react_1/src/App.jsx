import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";

const App = () => {
  //vrijednost varijable new item mijenjaš samo funkcijom setNewitem
  //a kad e okida...dvaki put kad upišeš nešto u input.id = item, zato treabš i event handler, on
  //const [newItem, setNewItem] = useState("");
  // ovo ti radi kad ne spremaš u lokalniStoragr
  //const [todos, setTodos] = useState([]);

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

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

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;

import { useState } from "react";
/* vjezba  todo osnove*/
const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    //mora biti funkcija
    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem }];
    });
    setNewItem("");
  }

  const handleDelete = (todoSelected) => {
    alert(todoSelected.id);
    const filterTodo = todos.filter((todo) => todo.id !== todoSelected.id);
    setTodos(filterTodo);
  };
  //ver 2
  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">New item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
      <h1>Todo list</h1>
      <hr />
      <ul>
        {todos.length === 0 && "No Todos"}
        {/* short circuiting, ako je prvo istinito ispisuje drugo */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                {todo.title}
                {/*  <button onClick={() => handleDelete(todo)}>Delete</button> */}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                {/* pazimoraš pozvati funckiju onClick */}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;

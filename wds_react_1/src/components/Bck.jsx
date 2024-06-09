import { useState } from "react";
import "./styles.css";

const App = () => {
  //vrijednost varijable new item mijenjaš samo funkcijom setNewitem
  //a kad e okida...dvaki put kad upišeš nešto u input.id = item, zato treabš i event handler, on
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSumbit(e) {
    e.preventDefault();
    //kad mijenjaš vrijednosti, radiš sa previopus moraš u funckiju stavciti
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
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
      <h1 className="header">Todo list</h1>
      <ul className="list">
        {todos.length === 0 && "<--No Todos-->"}
        {/* short circuiting, && akoje prvo točno vrati drugo
        || ako je prvi točan tu staje i ne izvšava drugo
        true  || console.log("Ne") vrati true, nikad ne ide na cl
        false || console.log("ne") ide na console log
        false && console.log("Ne") --ide false
        true &&  console.log("Ne")--ide ne
        */}

        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)} //!! pazi ovo mora biti funkcija
                className="btn btn-danger">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;

const TodoList = (todos) => {
  return (
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
                // onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button
              //onClick={() => deleteTodo(todo.id)} //!! pazi ovo mora biti funkcija
              className="btn btn-danger">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

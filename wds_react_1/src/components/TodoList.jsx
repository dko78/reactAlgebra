import TodoItem from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
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
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            /*
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.ke3}
            */
          />
        );
      })}
    </ul>
  );
}

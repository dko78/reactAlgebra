const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)} //!! pazi ovo mora biti funkcija
        className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

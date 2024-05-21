import { FaCheck, FaTrash } from "react-icons/fa";

const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <li className="todo-item">
          pozz
          <button className="complete-btn">
            <FaCheck />
          </button>
          <button className="trash-btn" onClick={deleteHandler}>
            <FaTrash />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;

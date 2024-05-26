import { FaCheck, FaTrash } from "react-icons/fa";

const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  /* ne kuzim zašto samo fileter kad splice briše iz lists
  // JavaScript code to illustrate splice() function 

let arr = ["shift", "splice", "filter", "pop"];

// Removing the specified element from the array 
let spliced = arr.splice(1, 1);
console.log("Removed element: " + spliced);
console.log("Remaining elements: " + arr); */
  const completedHandler = () => {
    //mijenaj samo svojstvo
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element; //ovo je vazno inače sve izgubiš jer si mapirao gore samo 1
      })
    );
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <p>{todo.text}</p>
      <button className="complete-btn" onClick={completedHandler}>
        <FaCheck />
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <FaTrash />
      </button>
    </li>
  );
};

export default Todo;

import HOC from "./HOC";

const ListaTodo = ({ podaci }) => {
  let filterTodos = podaci.map((todo) => <p key={todo.id}>{todo.title}</p>);
  //treba splice metoda
  return <div>{filterTodos}</div>;
};
const SearchTodos = HOC(ListaTodo, "todos");
//export default ListaTodo;
export default SearchTodos;

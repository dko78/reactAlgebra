import React, { useEffect, useState } from "react";

const ListaTodos = () => {
  const [todos, setTodos] = useState([]);
  const [upit, setUpit] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data)); //tu moze biti i cl data, ali ovako sa useState
  }, []);

  let filterTodos = todos
    .filter(({ title }) => {
      return title.toLowerCase().indexOf(upit.toLowerCase()) >= 0; //ako nema vraća -1
    })
    .map((todo) => <p key={todo.id}>{todo.title} </p>)
    .slice(0, 10);

  const handleChange = (e) => {
    setUpit(e.target.value);
  };
  return (
    <div>
      <input type="text" value={upit} onChange={handleChange} />
      {filterTodos}
    </div>
  );
};

export default ListaTodos;

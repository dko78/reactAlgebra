import React, { useEffect, useState } from "react";

const ListaUsera = () => {
  const [users, setUsers] = useState([]);
  const [upit, setUpit] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data)); //tu moze biti i cl data, ali ovako sa useState
  }, []);

  let filterUsers = users
    .filter(({ name }) => {
      return name.toLowerCase().indexOf(upit.toLowerCase()) >= 0; //ako nema vraća -1
    })
    .map((user) => <p key={user.id}>{user.name} </p>);

  const handleChange = (e) => {
    setUpit(e.target.value);
  };

  return (
    <div>
      <input type="text" value={upit} onChange={handleChange} />
      {filterUsers}
    </div>
  );
};
export default ListaUsera;

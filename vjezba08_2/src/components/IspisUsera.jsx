import { useEffect } from "react";

const IspisUsera = () => {
  const fetchUsers = async () => {
    const res = await fetch("http://api.github.com/users");
    const data = await res.json();
    console.log(data);
  };
  return <div>IspisUsera</div>;
};

export default IspisUsera;

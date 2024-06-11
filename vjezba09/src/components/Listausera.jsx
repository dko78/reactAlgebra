import HOC from "./HOC";

const Listausera = ({ podaci }) => {
  let filterUsers = podaci.map((user) => <p key={user.id}>{user.name}</p>);

  return <div>{filterUsers}</div>;
};

const SearchUsers = HOC(Listausera, "users"); //definiramo međuvarijabla

export default SearchUsers;

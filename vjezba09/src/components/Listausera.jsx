import HOC from "./HOC";

const Listausera = ({ podaci }) => {
  let filterUsers = podaci.map((user) => <p key={user.id}>{user.name}</p>);

  return <div>{filterUsers}</div>;
};

//moraš definirati varijablu međuvarijablui

const SearchUsers = HOC(Listausera, "users");

export default SearchUsers;

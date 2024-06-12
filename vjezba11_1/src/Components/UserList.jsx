import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: "1", ime: "Ivan", email: "dfsdfsd@gdfgd.hr" },
    { id: "2", ime: "Stjepan", email: "stjepan@gdfgd.hr" },
    { id: "3", ime: "Maja", email: "maja@gdfgd.hr" },
  ];
  //const [users, setusers] = useState();
  //zdadatak ispšis imena i mailova
  const userList = () =>
    users.map((user) => (
      <div key={user.id}>
        <div>
          <h2>{user.ime}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <Link to={`edit-user/${user.id}`}>
            <MdOutlineEdit />
          </Link>
          <MdDeleteForever />
        </div>
      </div>
    ));
  return (
    <>
      <div>
        <Link to="/add-user">
          <Button />
        </Link>
      </div>
      <div>{users.length ? userList() : <p>Nema korisnika</p>}</div>
    </>
  );
};

export default UserList;

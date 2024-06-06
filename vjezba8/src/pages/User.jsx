import { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
//za url
import { useParams } from "react-router-dom";

const User = () => {
  const { getUser, user } = useContext(GithubContext); //treba ti user i getuser
  const { login, avatar_url, repos_url, name } = user;
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>User</div>;
};

export default User;

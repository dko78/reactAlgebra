import { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
//za url
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../shared/Spinner";
import RepoList from "../components/RepoList";

const User = () => {
  const { getUser, user, loading, repos, getRepos } = useContext(GithubContext); //treba ti user i getuser
  const { login, avatar_url, repos_url, name } = user;
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="mx-auto w-full lg:w-10/12">
          <Link to="/" className="mb-4">
            Nazad
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3x1">{name}</h1>
              <figure className="rounded-lg shadow-x1 mb-6">
                <img src={avatar_url} alt={login} />
              </figure>

              <p>{login}</p>
              <a href={repos_url}>Link na repozitorij</a>
            </div>
          </div>
          <div>
            <RepoList repos={repos} />
          </div>
        </div>
      </>
    );
  }
};

export default User;

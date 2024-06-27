import React, { useState, useEffect } from "react";
import useFetch from "./components/useFetch";

const App = () => {
  /* const [gitUser, setGitUser] = useState(null);
  const [repositories, setRepositories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); */
  const {
    data: gitUser,
    loading,
    error,
  } = useFetch(`https://api.github.com/users/dko78`);

  const {
    data: repos,
    loadingRepos,
    errorRepos,
  } = useFetch(`https://api.github.com/users/dko78/repos`);

  return (
    <>
      <form>
        <label htmlFor="user">GitHub username:</label>
        <div>
          <input
            type="text"
            id="user"
            placeholder="e.g. facebook"
            //value={userSearchName}
            //onChange={handleSearch}
          />
        </div>
        <button>GO!</button>
      </form>
      <hr />
      {error && <div>{error}</div>}
      {loading && <div>Učitavam...</div>}
      {gitUser && (
        <div key={gitUser.id}>
          <img
            src={gitUser.avatar_url}
            alt={gitUser.name}
            className="img"
            width={100}
            height={100}
          />
          <p>{gitUser.name}</p>
          <p>{gitUser.bio}</p>
          <p>{gitUser.location}</p>
        </div>
      )}
      <hr />
      {errorRepos && <div>{errorRepos}</div>}
      {loadingRepos && <div>Učitavam repozitorije...</div>}
      {repos && (
        <div className="repos-list">
          {repos.map((repo) => (
            <div key={repo.id}>
              <p>{repo.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;

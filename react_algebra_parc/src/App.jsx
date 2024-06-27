import React, { useState } from "react";
import useFetch from "./components/useFetch";

const App = () => {
  const [searchUser, setSearchUser] = useState("");
  const [urlUser, setUrlUser] = useState("");
  const [urlRepos, setUrlRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = searchUser.toLowerCase();
    if (userInput) {
      setUrlUser(`https://api.github.com/users/${userInput}`);
      setUrlRepos(`https://api.github.com/users/${userInput}/repos`);
    }
    setSearchUser("");
  };

  const { data: gitUser, loading, error } = useFetch(urlUser);

  const { data: repos, loadingRepos, errorRepos } = useFetch(urlRepos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">GitHub username:</label>
        <div>
          <input
            required
            type="text"
            id="user"
            placeholder="e.g. facebook"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
        </div>
        <button>GO!</button>
      </form>
      <hr />
      {!urlUser && <div>Upišite usera</div>}
      {error && <div>ovo je iz err {error}</div>}
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

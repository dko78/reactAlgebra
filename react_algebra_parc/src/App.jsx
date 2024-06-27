import React, { useState } from "react";
import useFetch from "./components/useFetch";
import PrikazPodataka from "./components/PrikazPodataka";

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

  const handleReset = () => {
    setSearchUser("");
    setUrlUser(null);
    setUrlRepos(null);
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
      {urlUser && (
        <PrikazPodataka
          error={error}
          loading={loading}
          gitUser={gitUser}
          errorRepos={errorRepos}
          loadingRepos={loadingRepos}
          repos={repos}
        />
      )}
      {urlUser && <button onClick={handleReset}>Resetiraj</button>}
    </>
  );
};

export default App;

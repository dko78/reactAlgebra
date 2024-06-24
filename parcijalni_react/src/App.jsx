import { useState, useEffect } from "react";
import RepozitoriList from "./components/RepozitoriList";

const App = () => {
  const [userSearchName, setUserSearchName] = useState("");
  const [avatar_url, setAvatarurl] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [idUser, setIdUser] = useState("");
  const [idRepo, setIdRepo] = useState("");
  const [repoName, setRepoName] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearch = (e) => {
    setUserSearchName(e.target.value.toLowerCase());
  };

  const handleSearcUser = (e) => {
    e.preventDefault();
    console.log(`https://api.github.com/users/${userSearchName}`);
    fetch(`https://api.github.com/users/${userSearchName}`)
      .then((res) => res.json())
      .then((data) => setData(data));

    showRepos();
    setUserSearchName("");
  };

  const setRepoData2 = (repos) => {
    repos.map((repo) => {
      console.log(repo.id, repo.name);
      //return <div key={repo.id}>{repo.name}</div>;
    });
  };

  const showRepos = () => {
    console.log(`https://api.github.com/users/${userSearchName}/repos`);
    fetch(`https://api.github.com/users/${userSearchName}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data)); //console.log(data)setRepoData(data))
  };

  const setData = ({ id, avatar_url, name, location, bio }) => {
    setIdUser(id);
    setAvatarurl(avatar_url);
    setName(name);
    setLocation(location);
    setBio(bio);
  };

  return (
    <>
      <form onSubmit={handleSearcUser}>
        <label htmlFor="user">GitHub username:</label>
        <div>
          <input
            type="text"
            id="user"
            placeholder="e.g. facebook"
            value={userSearchName}
            onChange={handleSearch} //(e) => setUserSearchName(e.target.value)
          />
        </div>
        <div>
          <button>GO!</button>
        </div>
      </form>

      <div key={idUser}>
        <img src={avatar_url} alt={name} />
        {name}
        {location}
        {bio}
      </div>
      <RepozitoriList repos={repos} />
    </>
  );
};

export default App;

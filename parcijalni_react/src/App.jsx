import { useState, useEffect } from "react";
import RepozitoriList from "./components/RepozitoriList";
import { RiH1 } from "react-icons/ri";

const App = () => {
  const [userSearchName, setUserSearchName] = useState("");
  const [avatar_url, setAvatarurl] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [idUser, setIdUser] = useState("");
  const [error, setError] = useState("");
  const [repos, setRepos] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleSearch = (e) => {
    setUserSearchName(e.target.value.toLowerCase());
  };

  const handleSearcUser = (e) => {
    e.preventDefault();
    setDisplay(true);
    console.log(`https://api.github.com/users/${userSearchName}`);
    fetch(`https://api.github.com/users/${userSearchName}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
        }
      });

    showRepos();
    setUserSearchName("");
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

  const handleReset = () => {
    setData({});
    setRepos([]);
    setUserSearchName("");
    setDisplay(false);
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
            onChange={handleSearch}
          />
        </div>
        <button>GO!</button>
      </form>
      <div>
        <div key={idUser}>
          <img src={avatar_url} alt={name} className="img" />
          <p>{name}</p>
          <p>{bio}</p>
          <p>{location}</p>
        </div>
        {display && <h2> REPOSITORIES</h2>}
        <RepozitoriList repos={repos} />
        {repos.length > 0 && <button onClick={handleReset}>RESET</button>}
        {/*  {display && console.log("repos.length " + repos.length)} */}
      </div>
    </>
  );
};

export default App;

import UseReducerPrimjer from "./components/UseReducerPrimjer";
import { useReducer } from "react";
import { postReducer, POCETNO_STANJE } from "./components/PostReducer";

//https://jsonplaceholder.typicode.com/posts/1

const App = () => {
  const [state, dispatch] = useReducer(postReducer, POCETNO_STANJE);
  /*
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState({}); //prazan objekt
*/
  const postFetch = () => {
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_USPJEH", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };
  return (
    <div>
      <button onClick={postFetch}>
        {state.loading ? "Dohvati usere" : "Učitavam..."}
      </button>
      <p>{state.post.title}</p>
      <p>{state.error && "Došlo je do pogreške"}</p>
    </div>
  );
};

export default App;

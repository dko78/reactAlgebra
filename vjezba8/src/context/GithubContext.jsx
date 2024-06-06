import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getUser = async (login) => {
    setLoading();
    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();
    dispatch({
      //prema reduceru
      type: "GET_USER",
      data: data,
    });
  };
  const fetchUsers = async (text) => {
    const res = await fetch(`https://api.github.com/search/users?q=${text}`);
    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      users: items,
    });
  };
  /*
  useEffect(() => {
    //fetchUsers();
  }, []);
*/
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const clearUsers = () => {
    dispatch({
      txpe: "CLEAR_USERS",
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        fetchUsers,
        clearUsers,
        getUser,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

const GithubReducer = (state, action) => {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,
          users: action.users,
          loading: false,
        };
      case "SET_LOADING":
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };
  
  export default GithubReducer;
  
const UserSearch = () => {
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
    </>
  );
};

export default UserSearch;

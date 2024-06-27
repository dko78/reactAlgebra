const PrikazPodataka = ({
  error,
  loading,
  gitUser,
  errorRepos,
  loadingRepos,
  repos,
}) => {
  return (
    <>
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

export default PrikazPodataka;

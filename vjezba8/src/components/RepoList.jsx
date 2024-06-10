const RepoList = ({ repos }) => {
  return (
    <div>
      <h2>Repozitorij</h2>
      {repos.map((repo) => (
        <p key={repo.id}>{repo.name}</p>
      ))}
    </div>
  );
};

export default RepoList;

const RepozitoriList = ({ repos }) => {
  return (
    <>
      <div className="repos-list">
        {repos.map((repo) => (
          <div key={repo.id}>
            <p>{repo.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RepozitoriList;

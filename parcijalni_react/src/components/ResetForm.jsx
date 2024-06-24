const ResetForm = ({ setData, setRepos, setUserSearchName, setDisplay }) => {
  const handleReset = () => {
    setData({});
    setRepos([]);
    setUserSearchName("");
    setDisplay(false);
  };
  return <button onClick={handleReset}>ResetForm</button>;
};

export default ResetForm;

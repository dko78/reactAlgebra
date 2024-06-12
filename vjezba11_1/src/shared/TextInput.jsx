const TextInput = ({ label, onChange, value, inputProps }) => {
  return (
    <>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} value={value} />
      {/* ovisno kako si pozvao  */}
    </>
  );
};

export default TextInput;

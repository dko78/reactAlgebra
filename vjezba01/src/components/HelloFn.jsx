const HelloFn = (props) => {
  return (
    <div>
      <p>
        HelloFn {props.ime} {props.prezime}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default HelloFn;

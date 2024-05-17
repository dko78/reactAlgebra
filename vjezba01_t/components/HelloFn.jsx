const HelloFn = (props) => {
  /* moraš u param zagradu staviti */
  return (
    <div>
      <p>HelloFn {props.ime}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default HelloFn;

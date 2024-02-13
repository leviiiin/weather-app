import "./Input.scss";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`input ${props.className}`}
      />
    </>
  );
};

export default Input;

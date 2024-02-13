import "./Button.scss";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`button button--${props.theme} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;

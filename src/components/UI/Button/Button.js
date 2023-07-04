import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      style={props.style}
      className={`${classes[props.type]} ${classes.button}`}
      onClick={props.onClick}
    >
      {props.text || props.children}
    </button>
  );
};

export default Button;

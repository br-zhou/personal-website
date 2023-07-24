import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={[classes.card, props.className].join(" ")}
    >
      {props.children}
    </div>
  );
};

export default Card;

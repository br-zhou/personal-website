import classes from "./SplitHalf.module.css";

const SplitHalf = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default SplitHalf;

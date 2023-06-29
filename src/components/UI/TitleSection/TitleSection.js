import classes from "./TitleSection.module.css"

const TitleSection = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes["bg-text"]}>{props.bgText}</p>
      <h2 className={classes["main-text"]}>{props.title}</h2>
    </div>
  );
};

export default TitleSection;
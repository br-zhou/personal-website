import classes from "./SkillItem.module.css";

const SkillItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h3>
            {props.title}
            <span className={classes["right-float"]}>{props.skillLevel}</span>
          </h3>
          <div className={classes.bar}>
            <div className={classes["progress-bar"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;

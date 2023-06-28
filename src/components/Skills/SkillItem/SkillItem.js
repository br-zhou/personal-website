import classes from "./SkillItem.module.css";

const SkillItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.img}></div>
      <div className={classes.text}>
        <h3>Title</h3>
        <p>Description.</p>
      </div>
    </div>
  );
};

export default SkillItem;

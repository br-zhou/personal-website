import SkillItem from "../SkillItem/SkillItem";
import classes from "./SkillsList.module.css"

const SkillsList = (props) => {
  return (
    <div className={classes.container} >
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
    </div>
  );
};

export default SkillsList;

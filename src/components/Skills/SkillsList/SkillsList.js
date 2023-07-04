import SkillItem from "../SkillItem/SkillItem";
import SplitHalf from "../../UI/SplitHalf/SplitHalf";

const SkillsList = (props) => {
  return (
    <SplitHalf>
      <SkillItem title="Javascript" skillLevel="Intermediate" percent="78%" />
      <SkillItem title="C++" skillLevel="Advanced" />
      <SkillItem title="3" skillLevel="99%" />
      <SkillItem title="4" />
      <SkillItem title="5" />
    </SplitHalf>
  );
};

export default SkillsList;

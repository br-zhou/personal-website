import SkillItem from "../SkillItem/SkillItem";
import SplitHalf from "../../UI/SplitHalf/SplitHalf";

const SkillsList = (props) => {
  const { activeTab, data } = props;
  const skillsData = data[activeTab];

  if (!skillsData) return <p>An Error Occurred</p>;
  const skills = Object.keys(skillsData);

  const createSkillItem = (skill, index) => {
    const percent = skillsData[skill];
    let level = "Developing";
    if (percent > 50) level = "Proficient";
    if (percent > 80) level = "Advanced";

    return <SkillItem key={`si-${index}`} title={skill} percent={`${percent}%`} level={level} />;
  };

  return <SplitHalf>{skills.map((skill, index) => createSkillItem(skill, index))}</SplitHalf>;
};

export default SkillsList;

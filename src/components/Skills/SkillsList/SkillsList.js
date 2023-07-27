import SkillItem from "../SkillItem/SkillItem";
import SplitHalf from "../../UI/SplitHalf/SplitHalf";

const SkillsList = (props) => {
  const { activeTab, data } = props;
  const skillsData = data[activeTab];

  if (!skillsData) return <p>An Error Occurred</p>;
  const skills = Object.keys(skillsData);

  const createSkillItem = (skill) => {
    const percent = skillsData[skill];
    let level = "Developing";
    if (percent > 50) level = "Proficient";
    if (percent > 80) level = "Advanced";

    return <SkillItem title={skill} percent={`${percent}%`} level={level} />;
  };

  return <SplitHalf>{skills.map((skill) => createSkillItem(skill))}</SplitHalf>;
};

export default SkillsList;

import TitleSection from "../UI/TitleSection/TitleSection";
import SkillsBar from "./SkillsBar/SkillsBar";
import SkillsList from "./SkillsList/SkillsList";
import SKILLS_DATA from "./SkillsData";
import { useState } from "react";

const Skills = () => {
  const TABS = Object.keys(SKILLS_DATA);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className={`bg-grey`}>
      <div className={`section-content`}>
        <TitleSection title="SKILLS" bgText="RELEVANT" />
        <hr />
        <SkillsBar activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
        <hr />
        <SkillsList activeTab={activeTab} data={SKILLS_DATA}/>
      </div>
    </section>
  );
};

export default Skills;

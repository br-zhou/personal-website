import TitleSection from "../UI/TitleSection/TitleSection";
import SkillsBar from "./SkillsBar/SkillsBar"
import SkillsList from "./SkillsList/SkillsList";

const Skills = () => {
  return (
    <section className={`bg-grey`}>
      <div className={`section-content`}>
        <TitleSection title="SKILLS" bgText="RELEVANT"/>
        <hr/>
        <SkillsBar />
        <hr/>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;

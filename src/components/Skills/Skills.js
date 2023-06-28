import SkillsBar from "./SkillsBar/SkillsBar"
import SkillsList from "./SkillsList/SkillsList";

const Skills = () => {
  return (
    <section className={`bg-grey`}>
      <div className={`section-content`}>
        <h1>Skills</h1>
        <hr/>
        <SkillsBar />
        <hr/>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;

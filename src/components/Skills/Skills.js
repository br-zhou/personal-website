import SkillsBar from "./SkillsBar"
import classes from "./Skills.module.css"

const Skills = () => {
  return (
    <section className={`bg-grey`}>
      <div className={`section-content`}>
        <h1>Skills</h1>
        <hr/>
        <SkillsBar />
      </div>
    </section>
  );
};

export default Skills;

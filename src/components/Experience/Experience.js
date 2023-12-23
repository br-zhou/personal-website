import { CERTIFICATIONS, EDUCATION, WORK_EXPERIENCE } from "../../assets/ExperienceData";
import TitleSection from "../UI/TitleSection/TitleSection";
import ExpItem from "./ExpItem/ExpItem";
import classes from "./Experience.module.css";

const getCards = (data) => {
  return data.map((project) => <ExpItem {...project} />);
};

const Experience = () => {
  return (
    <>
      <section className={`bg-grey`}>
        <TitleSection title="Experience" bgText="" />
        <div className={`section-content`}>
          <div className={classes["flexbox-container"]}>
            {getCards(WORK_EXPERIENCE)}
          </div>
        </div>
      </section>

      <section className={`bg-white`}>
        <TitleSection title="Education" bgText="" />
        <div className={`section-content`}>
          <div className={classes["flexbox-container"]}>
            {getCards(EDUCATION)}
          </div>
        </div>
      </section>

      <section className={`bg-grey`}>
        <TitleSection title="Certifications" bgText="" />
        <div className={`section-content`}>
          <div className={classes["flexbox-container"]}>
            {getCards(CERTIFICATIONS)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

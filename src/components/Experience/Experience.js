import { CERTIFICATIONS, WORK_EXPERIENCE } from "../../assets/ExperienceData";
import ExpItem from "./ExpItem/ExpItem";
import classes from "./Experience.module.css";

const getCards = (data) => {
  return data.map((item) => <ExpItem key={item.title} {...item} />);
};

const Experience = () => {
  return (
    <section className="bg-grey">
      <div className="section-content">
        <h2 className="section-title">Work Experience</h2>
        <div className={classes["flexbox-container"]}>
          {getCards(WORK_EXPERIENCE)}
        </div>
      </div>
    </section>
  );
};

export const Certifications = () => {
  return (
    <section className="bg-grey" style={{ paddingTop: "0" }}>
      <div className="section-content">
        <h2 className="section-title">Certifications</h2>
        <div className={classes["flexbox-container"]}>
          {getCards(CERTIFICATIONS)}
        </div>
      </div>
    </section>
  );
};

export default Experience;
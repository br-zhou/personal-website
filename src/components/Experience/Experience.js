import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../../assets/projectData";
import TitleSection from "../UI/TitleSection/TitleSection";
import ExpItem from "./ExpItem/ExpItem";
import classes from "./Experience.module.css";

const WORK_EXPERIENCE = [
  {title: "UBC AeroDesign", timeline: "Sep. 2023 - Present"},
  {title: "Autoverse.tech",timeline: "May. 2023 - Jun. 2023"},
  {title: "UBC Rocket",timeline: "Oct. 2022 - Apr. 2023"},
]

const EDUCATION = [
  {title: "Bachelor of Science - Computer Science", timeline: "Sep. 2022 - Present"},
  {title: "Concurrent Studies - Computer Science",timeline: "Sep. 2021 - Apr. 2022"},
]

const getCards = (data) => {
  return data.map((project) => <ExpItem {...project}/>);
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
    </>
  );
};

export default Experience;

import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../../assets/projectData";
import TitleSection from "../UI/TitleSection/TitleSection";
import ProjectCard from "./ProjectCard/ProjectCard";
import classes from "./ProjectGallery.module.css";



const dataToCard = (data) => {
  return <ProjectCard {...data} key={data.id} />;
};

const getCards = (data) => {
  return data.map((project) => dataToCard(project));
};

const ProjectGallery = () => {
  return (
    <>
      <section className={`bg-grey`}>
        <TitleSection title="Projects" />
        <div className={`section-content`}>
          <div className={classes["flexbox-container"]}>
            {getCards(FEATURED_PROJECTS)}
          </div>
        </div>
      </section>

      <section className={`bg-white`}>
        <TitleSection title="More Projects" />
        <div className={`section-content`}>
          <div className={classes["flexbox-container"]}>
            {getCards(OTHER_PROJECTS)}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGallery;

import TitleSection from "../UI/TitleSection/TitleSection";
import ProjectCard from "./ProjectCard/ProjectCard";
import classes from "./ProjectGallery.module.css";

const FEATURED_PROJECTS = ["Project 1", "Project 2", "Project 3"];

const ProjectGallery = () => {
  return (
    <section className={`bg-grey`}>
      <TitleSection title="Projects" bgText="Featured" />
      <div className={`section-content`}>
        <div className={classes['flexbox-container']}>
          <ProjectCard
            link="/projects/p1"
            title="Example Project With Long Name"
            desc="blah blach blach blach blach"
            img=""
          />
          <ProjectCard
            link="/projects/p1"
            title="Example Project With Long Name ple Project With Long Name ple Project With Long Name"
            desc="blah blach blach blach blach blah blach blach blach blach blah blach blach blach blach"
          />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

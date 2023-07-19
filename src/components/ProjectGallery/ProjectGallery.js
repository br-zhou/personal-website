import SplitHalf from "../UI/SplitHalf/SplitHalf";
import ProjectCard from "./ProjectCard/ProjectCard";

const PROJECTS = ["Project 1", "Project 2", "Project 3"];

const ProjectGallery = () => {
  return (
    <section className={`bg-grey`}>
      <div className={`section-content`}>
        <h1>Featured Projects</h1>
        <SplitHalf>
          <ProjectCard link="/projects/p1" title="Example Project With Long Name" desc="blah blach blach blach blach"/>
          <ProjectCard link="/projects/p1" title="Example Project With Long Name ple Project With Long Name ple Project With Long Name" desc="blah blach blach blach blach blah blach blach blach blach blah blach blach blach blach"/>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </SplitHalf>
      </div>
    </section>
  );
};

export default ProjectGallery;

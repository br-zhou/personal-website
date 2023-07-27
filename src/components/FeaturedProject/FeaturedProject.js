import Button from "../UI/Button/Button";
import TitleSection from "../UI/TitleSection/TitleSection";
import { Link } from "react-router-dom";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const FeaturedProject = () => {
  const PROJECT_ID = "dino-brawl";

  return (
    <section className={`bg-white`}>
      <div className={`section-content`}>
        <TitleSection title="Project" bgText="Featured" />
        <ProjectDetails id={PROJECT_ID} />

        <Link to="/projects">
          <Button text="See More Projects!" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProject;

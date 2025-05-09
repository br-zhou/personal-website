import Button from "../UI/Button/Button";
import TitleSection from "../UI/TitleSection/TitleSection";
import { Link } from "react-router-dom";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const FeaturedProject = () => {
  const PROJECT_ID = "untitled-game";

  return (
    <section className={`bg-white`}>
      <div className={`section-content`}>
        <TitleSection title="Featured Project" />
        <ProjectDetails id={PROJECT_ID} />

        <Link to="/projects">
          <Button text="See More Projects!" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProject;

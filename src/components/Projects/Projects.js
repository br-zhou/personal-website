import Button from "../UI/Button/Button";
import Gallery from "./Gallery/Gallery";
import TitleSection from "../UI/TitleSection/TitleSection";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className={`bg-white`}>
      <div className={`section-content`}>
        <TitleSection title="Project" bgText="Featured" />
        <hr />
        <Gallery />
        <Link to="/projects">
          <Button text="See More Projects!" onClick={null} />
        </Link>
      </div>
    </section>
  );
};

export default Projects;

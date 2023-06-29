import Button from "../UI/Button/Button";
import Gallery from "./Gallery/Gallery";
import TitleSection from "../UI/TitleSection/TitleSection";

const Projects = () => {
  return (
    <section className={`bg-white`}>
      <div className={`section-content`}>
        <TitleSection title="Project" bgText="Featured"/>
        <hr/>
        <Gallery/>
        <Button text="See More Projects!" onClick={null}/>
      </div>
    </section>
  );
};

export default Projects;

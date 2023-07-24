import { Link, useParams } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";

const ProjectDetailPage = () => {
  const params = useParams();

  const id = params.projectId;
  
  return (
    <section className={`bg-white section`}>
      <div className="section-content">
        <ProjectDetails id={id} />

        <Link to=".." relative="path">
          <Button text="Back To Projects Page" onClick={null} />
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetailPage;

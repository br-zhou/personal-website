import Projects from "../../components/Projects/Projects";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const params = useParams();

  const id = params.projectId;

  return (
    <>
      <h1>Project Page!</h1>
      <h1>id: {id}</h1>
      <Projects />
    </>
  );
};

export default ProjectDetailPage;

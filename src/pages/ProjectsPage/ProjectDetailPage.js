import { Link, useParams } from "react-router-dom";
import Button from "../../components/UI/Button/Button";

const ProjectDetailPage = () => {
  const params = useParams();

  const id = params.projectId;

  return (
    <>
      <h1>Project Page!</h1>
      <h1>id: {id}</h1>
      <Link to=".." relative="path">
          <Button text="See More Projects!" onClick={null} />
        </Link>
    </>
  );
};

export default ProjectDetailPage;

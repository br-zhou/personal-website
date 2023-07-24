import { OTHER_PROJECTS, PROJECT_DETAILS } from "../../assets/projectData";
import Carousel from "../Carousel/Carousel";
import Card from "../UI/Card/Card";
import classes from "./ProjectDetails.module.css";

const ProjectDetails = (props) => {
  const projectId = props.id;

  let projectData = PROJECT_DETAILS[projectId];

  if (!projectData) { // ! temp
    projectData = OTHER_PROJECTS.find(proj => proj.id === projectId);
  }

  return (
    <>
      <h1 className={classes.title}>{projectData.title}</h1>
      <div className={classes.container}>
        <div className={classes["carousel-container"]}>
          <Card>
            <Carousel img={projectData.img}/>
          </Card>
        </div>

        <div className={classes["info-container"]}>
          <Card className={classes['info-card']}>
            <h1>Description</h1>
            <p>
              {projectData.desc}
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

import { PROJECT_DETAILS } from "../../assets/projectData";
import Carousel from "../Carousel/Carousel";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./ProjectDetails.module.css";

const ProjectDetails = (props) => {
  const projectId = props.id;

  let projectData = PROJECT_DETAILS[projectId];
  const btn = projectData.btn;

  return (
    <>
      <h1 className={classes.title}>{projectData.title}</h1>
      <div className={classes.container}>
        <div className={classes["carousel-container"]}>
          <Card>
            <Carousel img={projectData.img} />
          </Card>
        </div>

        <div className={classes["info-container"]}>
          <Card className={classes["info-card"]}>
            <div className={classes.desc}>
              <h1>Description</h1>
              <p>{projectData.desc}</p>
            </div>

            {btn && (
              <div className={classes["btn-container"]}>
                <a href={btn.link} target="_blank" rel="noreferrer">
                  <Button text={btn.text || "View Live!"} type={btn.type || "secondary"} />
                </a>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

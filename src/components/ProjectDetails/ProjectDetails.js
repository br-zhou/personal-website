import Carousel from "../Carousel/Carousel";
import Card from "../UI/Card/Card";
import classes from "./ProjectDetails.module.css";

const ProjectDetails = (props) => {
  const projectId = props.id;

  return (
    <>
      <h1 className={classes.title}>{projectId}</h1>
      <div className={classes.container}>
        <div className={classes["carousel-container"]}>
          <Card>
            <Carousel />
          </Card>
        </div>

        <div className={classes["info-container"]}>
          <Card className={classes.card}>
            <h1>Description</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              dolor orci, commodo molestie dolor ut, fringilla pellentesque
              urna. Etiam eget fermentum turpis. Fusce sagittis velit dui, id
              pellentesque dolor sagittis quis. Mauris sem mauris, dignissim id
              sagittis quis, molestie quis ante. Nulla ac malesuada lacus.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

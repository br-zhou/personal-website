import { Link } from "react-router-dom";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const generateImage = (src) => {
    return (
      <div className={classes["img-container"]}>
        <img src={props.img} />
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <Link to={`/projects/${props.id}`} className={classes.link}>
        <div className={classes.card}>
          {props.img && generateImage()}
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

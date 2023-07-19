import { Link } from "react-router-dom";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={classes.container}>
      <Link to={props.link} className={classes.link}>
        <div className={classes.card}>
          <div className={classes['img-container']}>
            <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg" />
          </div>

          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

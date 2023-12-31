import { Link } from "react-router-dom";
import classes from "./ProjectCard.module.css";
import Card from "../../UI/Card/Card";

const ProjectCard = (props) => {
  const generateImage = () => {
    return (
      <div className={classes["img-container"]}>
        <img src={props.thumb} alt="" loading="lazy" />
        {props.badge && <p className={classes.badge}>In Development!</p>}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <Link to={`${props.id}`} className={classes.link}>
        <Card className={classes.card}>
          {props.thumb && generateImage()}
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectCard;

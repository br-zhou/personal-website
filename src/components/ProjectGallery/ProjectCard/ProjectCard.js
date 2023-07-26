import { Link } from "react-router-dom";
import classes from "./ProjectCard.module.css";
import Card from "../../UI/Card/Card";

const ProjectCard = (props) => {
  const generateImage = () => {
    return (
      <div className={classes["img-container"]}>
        <img src={props.img} alt=""/>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <Link to={`${props.id}`} className={classes.link}>
        <Card className={classes.card}>
          {props.img && generateImage()}
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectCard;

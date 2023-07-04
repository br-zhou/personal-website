import classes from "./Thumbnail.module.css";

const Thumbnail = (props) => {
  return (
    <div className={classes["thumbnail-container"]}>
      <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg" alt="..." draggable={false}/>
      <p className={classes.badge}>In-Development!</p>
    </div>
  );
};

export default Thumbnail;

import Thumbnail from "./Thumbnail/Thumbnail";
import classes from "./Gallery.module.css";
import Caption from "./Caption/Caption";

const Gallery = () => {
  return (
    <div className={classes.container}>
      <div>
        <Thumbnail/>
      </div>
      <div>
        <Caption />
      </div>
    </div>
  );
};

export default Gallery;

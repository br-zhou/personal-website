import Thumbnail from "./Thumbnail/Thumbnail";
import Caption from "./Caption/Caption";
import SplitHalf from "../../UI/SplitHalf/SplitHalf";
import classes from "./Gallery.module.css"

const Gallery = () => {
  return (
    <SplitHalf>
      <div className={classes['img-container']}>
        <Thumbnail/>
      </div>
      <div>
        <Caption />
      </div>
    </SplitHalf>
  );
};

export default Gallery;

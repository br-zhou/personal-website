import { useState } from "react";
import classes from "./Carousel.module.css";

const Carousel = (props) => {
  const IMG_LIST = props.img || [""];

  console.log(props.img)

  const [activeSlide, setActiveSlide] = useState(0);

  const nextHandler = () => {
    setActiveSlide((prevState) => {
      const newState = prevState + 1;
      return newState >= IMG_LIST.length ? 0 : newState;
    });
  };

  const prevHandler = () => {
    setActiveSlide((prevState) => {
      const newState = prevState - 1;
      return newState <= -1 ? IMG_LIST.length - 1 : newState;
    });
  };

  return (
    <div className={classes.container}>
      <button
        className={`${classes.btn} ${classes.prev}`}
        onClick={prevHandler}
      >
        &#60;
      </button>
      <button
        className={`${classes.btn} ${classes.next}`}
        onClick={nextHandler}
      >
        &#62;
      </button>
      <ul>
        <li className={classes.slide}>
          <img src={IMG_LIST[activeSlide]} alt=""></img>
        </li>
      </ul>
    </div>
  );
};

export default Carousel;

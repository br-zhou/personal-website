import { useState } from "react";
import classes from "./Carousel.module.css";

const Carousel = (props) => {
  const IMG_LIST = props.img || [""];

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

  const getButtons = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <div className={classes.container}>
      {props.img && props.img.length > 1 && getButtons()}
      <ul>
        <li className={classes.slide}>
          {props.img ? (
            <img src={IMG_LIST[activeSlide]} alt="" loading="lazy"/>
          ) : (
            <h1>No Image Available</h1>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Carousel;

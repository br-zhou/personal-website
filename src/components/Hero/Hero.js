import HeroAnimation from "./Animation/Animation";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes["bg-content"]}>
        <HeroAnimation />
      </div>

      <div className={classes["main-content"]}>
        <div className={classes["picture-container"]}>
          <img
            src="https://cdn.br-zhou.com/site-img/profile_picture_2.jpg"
            alt="profile"
            className={classes.picture}
            draggable="false"
            loading="lazy"
          />
        </div>
        <div className={classes["text-container"]}>
          <h1 className={classes.title}>Brian Zhou</h1>
          <p className={classes.description}>
            Food, Badminton, Learning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import HeroAnimation from "./Animation/Animation";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes["bg-content"]}>
        <HeroAnimation />
      </div>

      <div className={classes["main-content"]}>
        <img
          src="https://cdn.br-zhou.com/profile_picture.jpg"
          alt="profile"
          className={classes.picture}
          draggable="false"
        />
        <div className={classes["text-container"]}>
          <h1 className={classes.title}>Brian Zhou</h1>
          <p className={classes.description}>
            Student, Programmer, and Game Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

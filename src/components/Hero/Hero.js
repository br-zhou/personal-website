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
          src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="profile"
          className={classes.picture}
          draggable="false"
        />
        <h1 className={classes.title}>Brian Zhou</h1>
        <p className={classes.description}>Student, Programmer, and Game Developer</p>
      </div>
    </div>
  );
};

export default Hero;

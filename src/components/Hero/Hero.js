import classes from "./Hero.module.css";
import dinoImg from "../../assets/Dino.png";

const Hero = () => {
  return (
    <div className={classes.background}>
      <div className={classes["bg-content"]}>
        <div className={classes.sun}></div>
        <div id={classes["left-hill"]} className={classes.hill}></div>
        <div id={classes["right-hill"]} className={classes.hill}></div>
        <div id={classes.dino}>
          <img
            src={dinoImg}
            draggable="false"
            id={classes['dino-img']}
            alt="red dino"
          />
          <div id={classes['dino-shadow']}></div>
        </div>
      </div>

      <div className={classes["main-content"]}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="profile"
          className={classes.picture}
          draggable="false"
        />
        <h1 className={classes.title}>Brian Zhou</h1>
        <p>Student, Developer, and Food Lover</p>
      </div>
    </div>
  );
};

export default Hero;

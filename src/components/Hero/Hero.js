import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.background}>
      <div className={classes.content}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="profile"
          className={classes.picture}
          draggable="false"
        />
        <h1>I am Brian</h1>
        <p>(Insert Something Interesting Here)</p>
      </div>
    </div>
  );
};

export default Hero;

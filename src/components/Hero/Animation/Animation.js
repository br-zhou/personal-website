import classes from "./Animation.module.css";

const HeroAnimation = () => {
  return (
    <div className={classes.doodles}>
      <div>
        <img
          src="https://cdn.br-zhou.com/site-img/salmon-15.gif"
          alt="scribble"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="https://cdn.br-zhou.com/site-img/salmon-10.gif"
          alt="scribble"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="https://cdn.br-zhou.com/site-img/salmon-15.gif"
          alt="scribble"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="https://cdn.br-zhou.com/site-img/salmon-20.gif"
          alt="scribble"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="https://cdn.br-zhou.com/site-img/salmon-15.gif"
          alt="scribble"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroAnimation;

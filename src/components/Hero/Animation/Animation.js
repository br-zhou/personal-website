import classes from "./Animation.module.css";

const HeroAnimation = () => {
  return (
    <div className={classes.doodles}>
      <div>
        <img src="https://cdn.discordapp.com/attachments/803481006446870598/1133923684986396712/icon-invert.png" loading="lazy" />
      </div>
      <div>
        <img src="https://cdn.discordapp.com/attachments/803481006446870598/1133930696562454569/export-i.gif" loading="lazy" />
      </div>
      <div>
        <img src="https://cdn.discordapp.com/attachments/803481006446870598/1133930696059125852/export.gif" loading="lazy" />
      </div>
      <div>
        <img src="https://cdn.discordapp.com/attachments/1123397647785533561/1133907536110694460/image.png" loading="lazy" />
      </div>
      <div>
        <img src="https://cdn.discordapp.com/attachments/1123397647785533561/1133907536110694460/image.png" loading="lazy" />
      </div>
    </div>
  );
};

export default HeroAnimation;

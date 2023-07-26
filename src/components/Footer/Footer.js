import classes from "./Footer.module.css";
import GithubSvg from "./GithubSvg";
import InstagramSvg from "./InstagramSvg";
import LinkedinSvg from "./LinkedinSvg";

const ICON_SIZE = 18;

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes["icons-container"]}>
          <a href="https://github.com/br-zhou" target="_blank" rel="noreferrer">
            <GithubSvg size={ICON_SIZE} />
          </a>

          <a href="https://www.linkedin.com/in/br-zhou/" target="_blank" rel="noreferrer">
            <LinkedinSvg size={ICON_SIZE} />
          </a>

          <a href="https://www.instagram.com/br_zhou/" target="_blank" rel="noreferrer">
            <InstagramSvg size={ICON_SIZE} />
          </a>
        </div>
        <p>Made with ❤️ by Brian</p>
        <p>©️ 2023 Brian Zhou</p>
      </div>
    </footer>
  );
};

export default Footer;

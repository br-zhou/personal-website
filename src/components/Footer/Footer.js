import Button from "../UI/Button/Button";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Made with ❤️ by Brian</p>
      <p>©️ 2023</p>
      <Button text="BACK TO THE TOP"/>
    </footer>
  );
};

export default Footer;
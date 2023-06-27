import logo from "../../assets/logox64.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["home-button"]}>
        <img
          src={logo}
          alt="website logo"
          className={classes["navbar-icon"]}
          draggable={false}
          width={32}
        />
        <h2 className={classes["navbar-title"]}>Brian Zhou</h2>
      </div>

      <nav className={classes["nav-links"]}>
        <ul>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Socials</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

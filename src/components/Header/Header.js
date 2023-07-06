import { useState } from "react";
import logo from "../../assets/logox64.png";
import BurgerSvg from "./BurgerSvg";
import classes from "./Header.module.css";
import XSvg from "./XSvg";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle((lastState) => !lastState);
  };

  return (
    <header className={classes.header}>
      <div className={classes["home-button"]}>
        <img
          src={logo}
          alt="website logo"
          className={classes["navbar-icon"]}
          draggable={false}
          width={24}
        />
        <h2 className={classes["navbar-title"]}>Brian Zhou</h2>
      </div>

      <div>
        <div class={classes["burger-btn"]} onClick={toggleMenu}>
          <BurgerSvg size="24" />
        </div>
      </div>

      <nav
        className={`${classes["nav-links"]} ${
          menuToggle && classes["show-side-bar"]
        }`}
      >
        <ul>
          <li id={classes["burger-x-btn"]} onClick={toggleMenu}>
            <XSvg size="48" />
          </li>
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

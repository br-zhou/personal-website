import { useState } from "react";
import logo from "../../assets/logox64.png";
import BurgerSvg from "./BurgerSvg";
import classes from "./Header.module.css";
import XSvg from "./XSvg";

const Header = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive((lastState) => !lastState);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  }

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
        <div className={classes["burger-btn"]} onClick={toggleSidebar}>
          <BurgerSvg size="24" />
        </div>
      </div>
      
      <div className={`${classes.backdrop} ${isSidebarActive && classes['backdrop-enabled']}`} onClick={closeSidebar}></div>

      <nav
        className={`${classes["nav-links"]} ${
          isSidebarActive && classes["show-side-bar"]
        }`}
      >
        <ul>
          <li id={classes["burger-x-btn"]} onClick={toggleSidebar}>
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

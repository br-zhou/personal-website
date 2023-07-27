import { useState } from "react";
import logo from "../../assets/logox64.png";
import BurgerSvg from "./BurgerSvg";
import classes from "./Header.module.css";
import XSvg from "./XSvg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive((lastState) => !lastState);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  const sidebarBackdrop = () => {
    return <div className={classes.backdrop} onClick={closeSidebar}></div>;
  };

  const isActivePage = ({ isActive }) => {
    return isActive ? classes["active-page"] : "";
  };

  return (
    <>
      {isSidebarActive && sidebarBackdrop()}
      <header className={classes.header}>
        <Link to="/">
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
        </Link>
        <div>
          <div className={classes["burger-btn"]} onClick={toggleSidebar}>
            <BurgerSvg size="24" />
          </div>
        </div>

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
              <NavLink to="/" className={isActivePage} end="true" onClick={closeSidebar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={isActivePage}  onClick={closeSidebar}>
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

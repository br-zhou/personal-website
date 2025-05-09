import { useState } from "react";
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
            {/* <li>
              <NavLink to="/experience" className={isActivePage}  onClick={closeSidebar}>
                Experience
              </NavLink>
            </li> */}
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

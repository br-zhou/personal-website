import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className={classes["page-container"]}>
      <Header />
      <main className={classes['content-wrap']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

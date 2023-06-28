import { useState } from "react";
import classes from "./SkillsBar.module.css";

const SkillsBar = () => {
  const TABS = ["Languages", "Libraries/Frameworks", "Tools"];

  const [selectTab, setSelectedTab] = useState(TABS[0]);

  const createTab = (title) => {
    return (
      <li
        className={selectTab === title && classes.active}
        onClick={() => {
          setSelectedTab(title);
        }}
      >
        {title}
      </li>
    );
  };

  return (
    <ul className={classes.navbar}>
      {TABS.map(tab => createTab(tab))}
    </ul>
  );
};

export default SkillsBar;

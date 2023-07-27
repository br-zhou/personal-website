import classes from "./SkillsBar.module.css";

const SkillsBar = (props) => {
  const {activeTab, setActiveTab} = props;

  const createTab = (title) => {
    return (
      <li
        key={title}
        className={`${activeTab === title && classes.active}`}
        onClick={() => {
          setActiveTab(title);
        }}
      >
        {title}
      </li>
    );
  };

  return (
    <ul className={classes.navbar}>{props.tabs.map((tab) => createTab(tab))}</ul>
  );
};

export default SkillsBar;

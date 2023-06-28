import classes from "./TitleSection.module.css"

const SectionTitle = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes["bg-text"]}>{props.bgText}</p>
      <h2 className={classes["main-text"]}>{props.title}</h2>
    </div>
  );
};

export default SectionTitle;

<div class="position-relative d-flex text-center mb-5">
  <h2 class="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
    Portfolio
  </h2>
  <p class="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
    My Work
    <span class="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>{" "}
  </p>
</div>;

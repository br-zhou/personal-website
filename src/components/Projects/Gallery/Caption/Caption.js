import Button from "../../../UI/Button/Button";
import classes from "./Caption.module.css"

const Caption = () => {
  return (
    <div className={classes}>
      <h1>Title Of Project</h1>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
        facilisis diam. In ut aliquam odio. Nam rhoncus quis arcu vitae laoreet.
        Duis ullamcorper tempus suscipit. Etiam arcu mi, scelerisque nec augue
        sed, feugiat aliquet lectus. Nulla fringilla, sapien ac semper.
      </p>
      <Button text={"More Info"}/>
    </div>
  );
};

export default Caption;

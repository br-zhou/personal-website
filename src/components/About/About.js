import Button from "../UI/Button/Button";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={`bg-white section`}>
      <div className={`section-content ${classes.about}`}>
        <h2>About Me</h2>
        <p>
          Hello! I'm a programming student at the University of British Columbia
          with a passion for continuous learning. I have experience with low-level programming,
          cloud technologies, and software engineering practices. I'm looking for unique
          opportunities to learn and grow.
        </p>
        <a
          href="https://cdn.br-zhou.com/Brian_Zhou_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Button text="View Resume" />
        </a>
      </div>
    </section>
  );
};

export default About;

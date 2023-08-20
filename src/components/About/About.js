import Button from "../UI/Button/Button";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={`bg-white section`}>
      <div className={`section-content ${classes.about}`}>
        <h2>About Me</h2>
        <p>
          I am a passionate developer studying at the University of British
          Columbia. My love for programming started when I wrote my first game
          in grade 7. Ever since, I have been pushing myself to sharpen my
          software engineering skills. As a curious individual, I am always
          looking for new challenges and opportunities!
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

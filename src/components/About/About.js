import classes from "./About.module.css";

const About = () => {
  return (
    <section className={`bg-white section`}>
      <div className={`section-content ${classes.about}`}>
        <h2>About Me</h2>
        <p>
          Hello 👋! I'm a 4th year Computer Science student at UBC with a background in software engineering
          and firmware development, primarily using C++ and Python. Beyond my professional work, I enjoy building
          web games, and I'm passionate about cyber security and low-level software.
        </p>
        {/* <a
          href="https://cdn.br-zhou.com/Brian_Zhou_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Button text="View Resume" />
        </a> */}
      </div>
    </section>
  );
};

export default About;

import classes from "./About.module.css";

const About = () => {
  return (
    <section className={`bg-white section`}>
      <div className={`section-content ${classes.about}`}>
        <h2>About Me</h2>
        <p>
          Hello 👋! I'm a 4th year computer science student at the University of British Columbia.
          My work experience involves software engineering and firmware development, usually with C++ and Python.
          Beyone that, I enjoy making web projects and building games, and learning about cyber security and
          low-level software.
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

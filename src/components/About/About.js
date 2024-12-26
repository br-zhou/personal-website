import classes from "./About.module.css";

const About = () => {
  return (
    <section className={`bg-white section`}>
      <div className={`section-content ${classes.about}`}>
        <h2>About Me</h2>
        <p>
          Hello 👋! I'm a 3rd year computer science honors student at the University of British Columbia.
          I have experience developing web applications, writing firmware, and building games.
          I love learning new technologies to solve challenging problems. 
          I am always looking for opportunities to learn and grow, and am working towards a career in cyber security.
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

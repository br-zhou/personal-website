import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience, { Certifications } from "../components/Experience/Experience";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Certifications />
    </>
  );
};

export default HomePage;

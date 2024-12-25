import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";
import Experience, { Certifications } from "../components/Experience/Experience";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <FeaturedProject />
    </>
  );
};

export default HomePage;

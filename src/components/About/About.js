import Button from "../UI/Button/Button";

const About = () => {
  return (
    <section className={`bg-white section`}>
      <div className="section-content">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          facilisis diam. In ut aliquam odio. Nam rhoncus quis arcu vitae
          laoreet. Duis ullamcorper tempus suscipit. Etiam arcu mi, scelerisque
          nec augue sed, feugiat aliquet lectus. Nulla fringilla, sapien ac
          semper fermentum, sem nibh iaculis felis, vel imperdiet risus lorem
          vitae odio. Integer ac orci odio. Aliquam iaculis porta condimentum.
          Aenean diam tellus, dapibus sit amet volutpat et, gravida vitae
          sapien. In eu orci quis ex maximus placerat. Aenean ultricies felis id
          luctus vulputate.
        </p>
        <Button text="Download CV" onClick={() => console.log("HI")}/>
      </div>
    </section>
  );
};

export default About;

import TitleSection from "../UI/TitleSection/TitleSection";
import ProjectCard from "./ProjectCard/ProjectCard";
import classes from "./ProjectGallery.module.css";

const FEATURED_PROJECTS = [
  {
    id: "personal-site",
    title: "Personal Website",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  },
  {
    id: "dino-game",
    title: "Multiplayer Game",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  },
  {
    id: "food-app",
    title: "Food Order App",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  },
  {
    id: "candy-exterminator",
    title: "Candy Exterminator",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  },
  {
    id: "app-blocker",
    title: "App Blocker",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  },
  {
    id: "fh-clubs",
    title: "School Website",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  },
];

const OTHER_PROJECTS = [
  {
    id: "java-quiz-app",
    title: "Java Quiz App",
    desc: "blah blach blach blach blach blah blach blach blach blach",
  },
  {
    id: "black-jack",
    title: "Black Jack",
    desc: "blah blach blach blach blach blah blach blach blach blach",
  },
  {
    id: "flash-game",
    title: "Space Fighters",
    desc: "blah blach blach blach blach blah blach blach blach blach",
  },
  {
    id: "unity-game",
    title: "3D Platformer",
    desc: "blah blach blach blach blach blah blach blach blach blach",
  },
]

const dataToCard = (data) => {
  return <ProjectCard {...data} key={data.id} />;
};

const getCards = (data) => {
  return data.map((project) => dataToCard(project));
};

const ProjectGallery = () => {
  return (
    <>
      <section className={`bg-grey`}>
        <TitleSection title="Projects" bgText="Notable" />
        <div className={`section-content`}>
          <div className={classes["flexbox-container"]}>
            {getCards(FEATURED_PROJECTS)}
          </div>
        </div>
      </section>

      <section className={`bg-white`}>
        <TitleSection title="Projects" bgText="Other" />
        <div className={`section-content`}>
          <div className={classes["flexbox-container"]}>
            {getCards(OTHER_PROJECTS)}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGallery;

import TitleSection from "../UI/TitleSection/TitleSection";
import ProjectCard from "./ProjectCard/ProjectCard";
import classes from "./ProjectGallery.module.css";

const FEATURED_PROJECTS = [
  {
    id: "ubc-avionics",
    title: "UBC Rocket Avionics",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  },
  {
    id: "dino-party",
    title: "Multiplayer Game",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.discordapp.com/attachments/1123397647785533561/1131341171982086154/image.png",
  },
  {
    id: "csdc",
    title: "Canadian Satellite Design Challenge",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
  },
  {
    id: "candy-exterminator",
    title: "Candy Exterminator",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.discordapp.com/attachments/1123397647785533561/1131338549967474790/image.png",
  },
  {
    id: "app-blocker",
    title: "Python App Blocker",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.discordapp.com/attachments/1123397647785533561/1131340096621264906/image.png",
  },
  {
    id: "fh-clubs",
    title: "School Website",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.discordapp.com/attachments/1123397647785533561/1131339690801381448/export.png",
  },
  {
    id: "personal-site",
    title: "Personal Website",
    desc: "blah blach blach blach blach blah blach blach blach blach",
    img: "https://cdn.discordapp.com/attachments/1123397647785533561/1131336875857170463/image.png",
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
    title: "Space Fighter",
    desc: "blah blach blach blach blach blah blach blach blach blach",
  },
  {
    id: "unity-game",
    title: "3D Platformer",
    desc: "blah blach blach blach blach blah blach blach blach blach",
  },
  {
    id: "food-app",
    title: "Food Order App",
    desc: "blah blach blach blach blach blah blach blach blach blach",
  },
  {
    id: "site-tracker",
    title: "Site Usage Tracker",
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

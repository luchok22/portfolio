import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import CarHub from "../public/car-hub.png";
import ProjectCard from "./ProjectCard";
import KgRiders from "../public/kgriders.png";
import SolidDevs from "../public/soliddevs.png";
const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={SolidDevs}
          title="Solid devs"
          link="https://solid-devs.vercel.app"
        />
        <ProjectCard
          img={CarHub}
          title="Car Hub"
          link="https://cars-rents.vercel.app"
        />
        <ProjectCard
          img={KgRiders}
          title="Kyrgyz Riders"
          link="https://kg-riders.com"
        />
      </div>
    </div>
  );
};

export default Projects;

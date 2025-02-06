import Project from "../components/Project";
import image from "../images/weatherDashboard.png";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const projectArray = {
    source: image,
    name: "Weather Dashboard",
    description:
      "Weather Dashboard app using node.js,typescript and express for server and api",
  };

  return (
    <article className="container mt-5">
      <h1 className="text-center">Portfolio</h1>
      <section className="container d-flex flex-wrap justify-content-around mt-5 portfolio">
        <Project project={projectArray} />
        <Project project={projectArray} />
        <Project project={projectArray} />
        <Project project={projectArray} />
        <Project project={projectArray} />
        <Project project={projectArray} />
      </section>
    </article>
  );
}

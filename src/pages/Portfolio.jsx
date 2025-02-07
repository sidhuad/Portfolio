import Project from "../components/Project";
import image from "../images/weatherDashboard.png";
import RpsImage from "../images/RockPaperScissor.png";
import empTracker from "../images/employeeTracker.png";
import vechBuil from "../images/vechBuilder.png";
import "../styles/Portfolio.css";

export default function Portfolio() {

  const projectArray = {
    source: image,
    name: "Weather Dashboard",
    description:
      "Weather Dashboard app using node.js,typescript and express for server and api",
    projectName:"Weather-Dashboard-Challenge"
  };
  const RPSObj ={
    source:RpsImage,
    name:"Rock Paper Scissors",
    description:
      "Rock Paper Scissor Game designed using javascript,html,css and bootstrap",
    projectName:"Rock-Papaer-Scissors"
  };
  const EmpTrackerObj ={
    source:empTracker,
    name:"Employee Tracker",
    description:
      "Emplyoee Tracker is a node cli project build using postgres database running on local machine along with inquirer package to get user input",
    projectName:"Employee_Tracker"
  };
  const VehBuildObj ={
    source:vechBuil,
    name:"Vehicle Builder",
    description:
      "Vehicle Builder is a node cli project running on local machine using inquirer package to get user input",
    projectName:"VehicleBuilder"
  };

  return (
    <article className="container mt-5">
      <h1 className="text-center">Portfolio</h1>
      <section className="container d-flex flex-wrap justify-content-around mt-5 portfolio">
        <Project project={projectArray} />
        <Project project={RPSObj} />
        <Project project={EmpTrackerObj} />
        <Project project={VehBuildObj} />
        <Project project={projectArray} />
        <Project project={projectArray} />
      </section>
    </article>
  );
}

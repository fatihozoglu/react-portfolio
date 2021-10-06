import "./Projects.css";
import Project from "../Project/Project";

function Projects( props ) {

  let projects = props.projectsInfo.map( (item, index) => {
    return (
      <Project
        key={index}
        imgSource={item.image}
        tech={item.techs}
        projectTitle={item.title}
        projectDesc={item.desc}
        demoLink={item.demo}
        githubLink={item.github}
      />
    );
  })

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects ({props.projectsInfo.length})</h2>
      { projects }
    </div>
  );
}

export default Projects;

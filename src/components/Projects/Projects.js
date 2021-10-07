import "./Projects.css";
import Project from "../Project/Project";
import { GrPrevious, GrNext } from "react-icons/gr"
import { useState } from "react";

function Projects( props ) {
  const [pageNum, setPageNum] = useState(1);

  let totalPage = Math.ceil(props.projectsInfo.length / 6);

  const increment = () => {
    if(pageNum !== totalPage) {
      setPageNum(pageNum + 1);
    }
  }
  const decrement = () => {
    if(pageNum !== 1) {
      setPageNum(pageNum - 1);
    }
  }

  let projectsCurrent = props.projectsInfo.slice((pageNum - 1) * 6, (pageNum - 1) * 6 + 6 )

  let projects = projectsCurrent.map( (item, index) => {
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
      <div className="project-header">
        <h2 className="projects-title">Projects ({props.projectsInfo.length})</h2>
        <button onClick={decrement} className="project-btn"><GrPrevious /></button> Page {pageNum} of {totalPage}<button onClick={increment} className="project-btn"><GrNext /></button>
      </div>
      { projects }
      <div className="page-nav">
        <button onClick={decrement} className="project-btn"><GrPrevious /></button> Page {pageNum} of {totalPage}<button onClick={increment} className="project-btn"><GrNext /></button>
      </div>
    </div>
  );
}

export default Projects;

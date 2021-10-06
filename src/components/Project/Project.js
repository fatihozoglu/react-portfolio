import "./Project.css";

function Project(props) {
  
  let techs = props.tech.map((item, index) => {
    return (
      <span key={index} className="project-tag">
        <i>{item}</i>
      </span>
    );
  });

  return (
    <div className="project-container">
      <div className="project-image">
        <img src={props.imgSource} alt="project" />
      </div>
      <div className="project-info">
        <h3 className="project-title">{props.projectTitle}</h3>
        <div className="project-tags">{techs}</div>
        <p className="project-desc">{props.projectDesc}</p>
        <div className="project-btns">
          <a href={props.demoLink} rel="noreferrer" target="_blank">
            DEMO
          </a>
          <a href={props.githubLink} rel="noreferrer" target="_blank">
            CODE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

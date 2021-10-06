import "./Skills.css"
import Skill from "../Skill/Skill"

function Skills() {
    return (
        <div className="skills-container">
            <Skill title={"Front End Skills"} />
            <Skill title={"Back End Skills"} />
        </div>
    );
}

export default Skills;
import "./Skills.css"
import Skill from "../Skill/Skill"

function Skills(props) {

    let skills = props.skillsInfo.map( (item, index) => {
        return <Skill key={index} skillInfo={item}/>
    })

    return (
        <div className="skills-container">
            {skills}
        </div>
    );
}

export default Skills;
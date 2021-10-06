import "./Skill.css"

function Skill( props ) {

    let skillItems = props.skillInfo.skillItems.map( (item,index) => {
        return (
            <div key={index} className="skill-item">
                <label htmlFor="html-progress">{item.skillName}</label>
                <progress id="html-progress" value={item.skillValue} max="100"></progress>
            </div>
        );
    });

    return (
        <div className="skill-container">
            <h2 className="skill-title">{ props.skillInfo.skillTitle }</h2>
            {skillItems}
        </div>
    );
}

export default Skill;
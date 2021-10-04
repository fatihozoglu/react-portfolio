import "./Skills.css"

function Skills( props ) {
    return (
        <div className="skills">
            <h2 className="skill-title">{ props.title }</h2>
            <div className="skill-item">
                <label htmlFor="html-progress">HTML</label>
                <progress id="html-progress" value="90" max="100"></progress>
            </div>
            <div className="skill-item">
                <label htmlFor="css-progress">CSS</label>
                <progress id="css-progress" value="80" max="100"></progress>
            </div>
            <div className="skill-item">
                <label htmlFor="bootstrap-progress">Bootstrap</label>
                <progress id="bootstrap-progress" value="80" max="100"></progress>
            </div>
            <div className="skill-item">
                <label htmlFor="js-progress">Javascript</label>
                <progress id="js-progress" value="80" max="100"></progress>
            </div>
            <div className="skill-item">
                <label htmlFor="react-progress">React</label>
                <progress id="react-progress" value="80" max="100"></progress>
            </div>
        </div>
    );
}

export default Skills;
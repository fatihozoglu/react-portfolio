import "./Experience.css"

function Experience(props) {

    let experiences = props.exp.map( (item, index) => {
        return (
            <div key={index} className="experience-items">
                <p className="exp-date">{item.startDate} - {item.endDate}</p>
                <p className="exp-title">{item.jobTitle}</p>
                <p className="exp-desc">{item.jobDesc}</p>
            </div>
        );
    });

    return (
        <div className="experience">
            <h2>Experiences</h2>
            { experiences }
        </div>
    );
}

export default Experience;
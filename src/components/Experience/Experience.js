import "./Experience.css"

function Experience() {
    return (
        <div className="experience">
            <h2>Experiences</h2>
            <div className="experience-items">
                <p className="exp-date">November 2020 - Current</p>
                <p className="exp-title">Front End Web Developer</p>
                <p className="exp-desc">I have been working as a freelance front end web developer. I create apps with with HTML5, CSS3, Javascript and ReactJS.</p>
            </div>
            <div className="experience-items">
                <p className="exp-date">May 2016 - November 2020</p>
                <p className="exp-title">Project Manager</p>
                <p className="exp-desc">I worked as a project manager for several projects. I helped my team about the topics related Electronic Communication Engineering.</p>
            </div>
            <div className="experience-items">
                <p className="exp-date">August 2013 - May 2016</p>
                <p className="exp-title">Electronic Maintenance Workshop Manager</p>
                <p className="exp-desc">I was responsible for the planning and organization of a team consisting nearly 50 technical staff.</p>
            </div>
        </div>
    );
}

export default Experience;
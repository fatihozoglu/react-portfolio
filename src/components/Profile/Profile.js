import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import photo from "../../static/profile-photo.jpg";
import "./Profile.css";

function Profile() {
    return (
        <div className="profile">
            <img className="profile-photo" src={photo} alt="profile" />
            <h1 className="profile-name">Fatih Özoğlu</h1>
            <h2 className="profile-title">Front-end Developer</h2>
            <p><HiMailOpen className="icon" /><a className="profile-link" href="mailto:fatih.ozoglu.91@gmail.com" rel="noreferrer" target="_blank">fatih.ozoglu.91@gmail.com</a></p>
            <p><FaGithub className="icon" /><a className="profile-link" href="https://github.com/fatihozoglu" rel="noreferrer" target="_blank">github.com/fatihozoglu</a></p>
            <p><FaLinkedin className="icon" /><a className="profile-link" href="https://www.linkedin.com/in/fatihozoglu/" rel="noreferrer" target="_blank">Fatih Özoğlu</a></p>
            <p>Electronic Engineer and self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
        </div>
    );
}

export default Profile;

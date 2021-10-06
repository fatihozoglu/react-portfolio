import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import photo from "../../static/profile-photo.jpg";
import "./Profile.css";

function Profile( props ) {

    return (
        <div className="profile">
            <img className="profile-photo" src={photo} alt="profile" />
            <h1 className="profile-name">{props.profileInfo.name}</h1>
            <h2 className="profile-title">{props.profileInfo.title}</h2>
            <p><HiMailOpen className="icon" /><a className="profile-link" href={`mailto:${props.profileInfo.mail}`} rel="noreferrer">{props.profileInfo.mail}</a></p>
            <p><FaGithub className="icon" /><a className="profile-link" href={props.profileInfo.github} rel="noreferrer" target="_blank">{props.profileInfo.github.slice(8)}</a></p>
            <p><FaLinkedin className="icon" /><a className="profile-link" href={props.profileInfo.linkedin} rel="noreferrer" target="_blank">{props.profileInfo.name}</a></p>
            <p>{ props.profileInfo.profileDesc }</p>
        </div>
    );
}

export default Profile;

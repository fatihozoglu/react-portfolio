import React from "react";
import "./Profile.css"
import photo from "../../static/profile-photo.jpg"

function Profile() {
    return (
        <div className="profile">
            <img className="profile-photo" src={photo} alt="profile" />
            <h1 className="profile-name">Fatih Özoğlu</h1>
            <h2 className="profile-title">Front-end Developer</h2>
            <p><span></span><a className="profile-mail" href="mailto:fatih.ozoglu.91@gmail.com">fatih.ozoglu.91@gmail.com</a></p>
            <p><span></span><a className="profile-tel" href="tel:+90 539 584 52 13">+90 539 584 52 13</a></p>
            <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
        </div>
    );
}

export default Profile;

import React from "react";
import Author from "../wmh-pro.jpg";

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-3 mt-3">
                        <img className="profile-id" src={Author} alt="Carlos Barrientos" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading" id="about">About Me</h1>
                    <p>This is a page about FISH... nah it's about me Carlos Barrientos.
                    <br /><br />
                    A little portfolio page, designed using Bootstrap and React.
                    <br /><br />
                    The idea behind this Portfolio page came from a fishing trip I'm about to go on
                    in about a week.
                    <br /><br />
                    I think we are ready to use React to do some cool things for Project 3.
                    <br /><br />
                    Godspeed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
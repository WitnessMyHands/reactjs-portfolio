import React from "react";

import paws2 from "../images/paws-2.png";
import paws from "../images/paws.jpg";
import ecomm from "../images/ecomm.png";
import team from "../images/team-pro.png";
import code from "../images/code.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {
    // Best Paws 2.0
    const openPopupboxPaws = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={paws2} alt="Best Paws 2.0" />
            <p>Discover breeds of dogs and cats, join our community forums, share stories of your best-paw-friends!</p>
            <b>GitHub Repository:</b> <a href="https://github.com/a-ukp/best-paws" className="hyper-link" onClick={() => window.open("https://github.com/a-ukp/best-paws")}>https://github.com/a-ukp/best-paws</a>
            <br />
            <b>Live Site:</b> <a href="https://bestpaws.herokuapp.com/" className="hyper-link" onClick={() => window.open("https://bestpaws.herokuapp.com/")}>https://bestpaws.herokuapp.com/</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigPaws = {
        titleBar: {
            enable: true,
            text: "Best Paws 2.0 Group Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Original Best Paws
    const openPopupboxPawsOne = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={paws} alt="Original Best Paws Site" />
            <p>A mobile and pup friendly application designed to connect users with dog parks in the area.</p>
            <b>GitHub Repository:</b> <a href="https://github.com/WitnessMyHands/Best-Paws-Site" className="hyper-link" onClick={() => window.open("https://github.com/WitnessMyHands/Best-Paws-Site")}>https://github.com/WitnessMyHands/Best-Paws-Site</a>
            <br />
            <b>Live Site:</b> <a href="https://witnessmyhands.github.io/Best-Paws-Site/" className="hyper-link" onClick={() => window.open("https://witnessmyhands.github.io/Best-Paws-Site/")}>https://witnessmyhands.github.io/Best-Paws-Site/</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigPawsOne = {
        titleBar: {
            enable: true,
            text: "Original Best Paws Group Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // E-Commerce Backend
    const openPopupboxEcomm = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={ecomm} alt="E-Commerce Backend with ORM" />
            <p>Backend web development for an Ecommerce website using ORM.</p>
            <b>GitHub Repository:</b> <a href="https://github.com/WitnessMyHands/Ecommerce-Backend" className="hyper-link" onClick={() => window.open("https://github.com/WitnessMyHands/Ecommerce-Backend")}>https://github.com/WitnessMyHands/Ecommerce-Backend</a>
            <br />
            <b>Video Link:</b> <a href="https://www.youtube.com/watch?v=iy7bFBIJqf8" className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=iy7bFBIJqf8")}>https://www.youtube.com/watch?v=iy7bFBIJqf8</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigEcomm = {
        titleBar: {
            enable: true,
            text: "E-Commerce Backend with ORM"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Team Profile Generator
    const openPopupboxTeam = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={team} alt="Team Profile Generator" />
            <p>Using Object Oriented Programming I have put together a fun 'team selector' project on Bees.</p>
            <b>GitHub Repository:</b> <a href="https://github.com/WitnessMyHands/Team-Profile-Generator" className="hyper-link" onClick={() => window.open("https://github.com/WitnessMyHands/Team-Profile-Generator")}>https://github.com/WitnessMyHands/Team-Profile-Generator</a>
            <br />
            <b>Video Link:</b> <a href="https://www.youtube.com/watch?v=mQhW5DRwPhU" className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=mQhW5DRwPhU")}>https://www.youtube.com/watch?v=mQhW5DRwPhU</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigTeam = {
        titleBar: {
            enable: true,
            text: "Team Profile Generator"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Code
    const openPopupboxCode = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={code} alt="Javascript Code Quiz" />
            <p>The code quiz enables users to begin a short five (5) question quiz over coding.</p>
            <b>GitHub Repository:</b> <a href="https://github.com/WitnessMyHands/Code-Quiz" className="hyper-link" onClick={() => window.open("https://github.com/WitnessMyHands/Code-Quiz")}>https://github.com/WitnessMyHands/Code-Quiz</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigCode = {
        titleBar: {
            enable: true,
            text: "Javascript Code Quiz"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="portfolio-heading text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPaws}>
                    <img className="portfolio-img" src={paws2} alt="Best Paws 2.0" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    
                    <div className="portfolio-image-box" onClick={openPopupboxPawsOne}>
                    <img className="portfolio-img" src={paws} alt="Best Paws 1.0" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>  

                    <div className="portfolio-image-box" onClick={openPopupboxEcomm}>
                    <img className="portfolio-img" src={ecomm} alt="Projects" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxTeam}>
                    <img className="portfolio-img" src={team} alt="Projects" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxCode}>
                    <img className="portfolio-img" src={code} alt="Projects" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPaws} />
            <PopupboxContainer {...popupboxConfigPawsOne} />
            <PopupboxContainer {...popupboxConfigEcomm} />
            <PopupboxContainer {...popupboxConfigTeam} />
            <PopupboxContainer {...popupboxConfigCode} />
        </div>
    )
}

export default Portfolio;
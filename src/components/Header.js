import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main">
                <h1>React Portfolio</h1>
                <Typed 
                className="typed-text"
                strings={[ "HTML", "CSS", "Bootstrap", "Javascript", "Nodejs", "React JS" ]}
                typeSpeed={50}
                backSpeed={60}
                loop
                />
                <a href="#contact" className="btn-main">Contact</a>
            </div>
        </div>
    )
}

export default Header;
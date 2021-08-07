import React from 'react';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Witness My Hands React Portfolio</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:713-702-1183">713.702.1183</a>
                        </div>
                        <div className="d-flex">
                            <p>cgbarr89@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href className="footer-nav">About Me</a>
                                <br />
                                <a href className="footer-nav">Portfolio</a>
                                <br />
                                <a href="./public/assets/Resume.pdf" download className="footer-nav">Resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-2 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.youtube.com/channel/UCy5fwrKpxws5QXxS-JQSDtw"}
                                quote={"Student Fullstack Developer Video Projects from Coding Bootcamp"}
                                hashtag={"#reactjs"}
                            >
                                <FacebookIcon className="mx-3" size={42} />
                            </FacebookShareButton>

                            <LinkedinShareButton
                                url={"https://www.youtube.com/channel/UCy5fwrKpxws5QXxS-JQSDtw"}
                                quote={"Student Fullstack Developer Video Projects from Coding Bootcamp"}
                                hashtag={"#reactjs"}
                            >
                                <LinkedinIcon className="mx-3" size={42} />
                            </LinkedinShareButton>
                            <p className="pt-3 text-center">
                                Copyright&copy;
                                {new Date().getFullYear()}&nbsp;Carlos Barrientos | All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;
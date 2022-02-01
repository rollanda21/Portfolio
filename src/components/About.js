import React from 'react'
import Typed from "react-typed"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="" alt=""/>
                </div>
            </div>

            
            <div className="right">
                <div className="about-wrapper">
                    <h2>Hi there, I am Rolla</h2> 
                    <h3> Freelance <span>
                            <Typed
                            className="typed-text"
                            strings={[ "Machine learning engineer", "Python developer" ]}
                            typeSpeed={60}
                            backSpeed={80}
                            loop
                            />
                        </span>
                        
                    </h3>
                    <a href=""></a>
                </div>
            </div>
            
            
        </div>
    )
}

export default About

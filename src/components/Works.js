import React from 'react'
const python_icon = require('../images/python_icon.png');
const logo = require('../images/logo512.png');
const arrow_left = require('../images/arrow_left.png');
const arrow_right = require('../images/arrow_right.png');

function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">                            
                                <div className="imgContainer">
                                    <img src={python_icon} alt=""/>
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        
                        <div className="right">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <img src={arrow_left} className="arrow left" alt=""/>
            <img src={arrow_right} className="arrow right" alt=""/>
        </div>
    )
}

export default Works

import React from 'react'

const youtube_icon = require('../images/youtube_icon.png');
const logo = require('../images/logo512.png');
const arrow_left = require('../images/arrow_left.png');
const arrow_right = require('../images/arrow_right.png');
const girl = require('../images/girl.jpg');

function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src={arrow_right} alt="" className="left"/>
                        <img src={girl} alt="" className="user"/>
                        <img src={youtube_icon} alt="" className="right"/>
                    </div>
                    <div className="center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="bottom">
                        <h3>Name</h3>
                        <h4>Job title </h4>
                    </div>
                </div>
            </div>
            
                
        </div>
    )
}

export default Testimonials

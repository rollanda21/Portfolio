import React from 'react'

const youtube_icon = require('../images/youtube_icon.png');
const logo = require('../images/logo512.png');
const arrow_left = require('../images/arrow_left.png');
const arrow_right = require('../images/arrow_right.png');
const girl = require('../images/girl.jpg');

function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Bob",
            title: "CEO RollaTrans",
            img: {girl},
            icon: {youtube_icon},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            featured: true,

        },
        {
            id: 1,
            name: "Clara",
            title: "CEO RollaTrans",
            img: {girl},
            icon: {youtube_icon},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            featured: true,

        },
        {
            id: 1,
            name: "Paula",
            title: "CEO RollaTrans",
            img: {girl},
            icon: {youtube_icon},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            featured: true,

        },
        
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>testimonials</h1>
            <div className="container">
                {data.map(d => (

                    <div className="card">
                    <div className="top">
                        <img src={arrow_right} alt="" className="left"/>
                        <img src={girl} alt="" className="user"/>
                        <img src={youtube_icon} alt="" className="right"/>
                    </div>
                    <div className="center">
                        <p>{d.desc} </p>
                    </div>
                    <div className="bottom">
                        <h3>{d.name} </h3>
                        <h4>{d.title} </h4>
                    </div>
                    </div>
                ))}
            </div>
            
                
        </div>
    )
}

export default Testimonials

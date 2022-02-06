import React from "react"
const shake = require('../images/shake.png');


function Contact () {
    return (
        <div className="contact" id="contact">
            
            <div className="container">
                <h1>Contact</h1>
                <h4>Hit me up width this form below, I will reply asap.</h4>
                <form>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message" ></textarea>
                    <button type="submit" className="btn btn-dark">SEND</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact

import React, { useEffect, useState } from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import PortfolioList from './PortfolioList';

import {
    PythonPortfolio,
    WebAppPortfolio,
    MachineLearningPortfolio,
    DeepLearningPortfolio,
        } from "./Data"

const logo = require('../../images/logo512.png');

function Portfolio({title}) {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "python",
            title: "Python"
        },
        {
            id: "web-app",
            title: "Web App"
        },
        {
            id: "machine-learning",
            title: "Machine Learning"
        },
        {
            id: "deep-learning",
            title: "Deep Learning"
        },
        
    ];

    useEffect(() => {
        switch(selected) {
            case "python":
                setData(PythonPortfolio);
                break;
            case "web-app":
                setData(WebAppPortfolio);
                break;
            case "machine-learning":
                setData(MachineLearningPortfolio);
                break;
            case "deep-learning":
                setData(DeepLearningPortfolio);
                break;
            default:
                setData(PythonPortfolio);
        }

    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList id={item.id} title={item.title}  active={selected === item.id} setSelected={setSelected} />
                ))}
                
            </ul>

            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt=""/>
                        <h3>{d.title}</h3>  
                    </div> 
                    ))}
                
                
                
            </div>
            
        </div>
    )
}

export default Portfolio

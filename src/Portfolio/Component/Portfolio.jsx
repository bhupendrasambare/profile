import React, { useEffect } from 'react'
import '../Style/Portfolio.css'
import { Motion } from '../../Component/Motion'
import coursemangement from "../../assets/course-management.avif"
import blogImage from "../../assets/blog-img.avif"
import RestApi from "../../assets/rest-api.jpg"
import cryptoTracker from "../../assets/crypto-tracker.jpeg"
import Todo from "../../assets/todo.jpg"
import Donation from "../../assets/donation.jpg"
import Weather from "../../assets/weather.png"
import Movies from "../../assets/movies.png"
import Microservices from "../../assets/microservices.png"

import portfolioData from './projects.json';
import { Roll } from 'react-awesome-reveal'

const images = {
    coursemangement,
    blogImage,
    RestApi,
    blogImage,
    Todo,
    Donation,
    cryptoTracker,
    Weather,
    Movies,
    Microservices
  };

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <Motion>
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Working</span>

        <div className="portfolio__container container grid">                    
            {
            portfolioData.map((project, index) => (
                <Roll triggerOnce direction='fade' cascade  damping={0.1}>
                    <div className="portfolio__content" key={index}>
                        <a className="portfolio__button">
                            <a  href={project.link} target="_blank" rel="noopener noreferrer" >
                                <img className="w-100 border-radius-20-top" src={images[project.image]} alt={project.name}/>
                            </a>
                            <div className="card-inner h-100">
                                <a  href={project.link} target="_blank" rel="noopener noreferrer" >
                                    <h3 className="portfolio__title">{project.name}</h3>
                                </a>
                                <div className='portfolio__flex p-3 d-flex'>
                                    {Object.entries(project.tech).map(([techName, iconClass]) => (
                                        <>
                                            <div className="tech-name">
                                                <div>
                                                    <i className={iconClass+" title-icon"} title={techName} key={techName}></i>
                                                </div>
                                                <div>
                                                    {techName}
                                                </div>
                                            </div>
                                        </>
                                        ))}
                                </div>
                            </div>
                        </a>
                    </div>
                </Roll>
            ))}

        </div>
    </section></Motion>
  )
}

export default Portfolio
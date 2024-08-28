import React, { useEffect, useState } from 'react'
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
import { Zoom } from 'react-awesome-reveal'
import { IoCloseSharp } from 'react-icons/io5'
import BlockchainTodo from '../../Projects/BlockchainTodo'

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
    const [showModel,setShowModel] = useState(false);
    const [data,setData] = useState(false);

    function showModelContent(project){
        console.log(project)
        setData(project)
        setShowModel(true)
    }

    function closeProject(){
        console.log("close")
        setShowModel(false)
    }

  return (
    <Motion>


    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Working</span>
        {
            showModel && 
            <section className='model_box'>
                <div className="model_header">
                    <div className="model_header_title">
                        {/* {data?.name} */}
                    </div>
                    <div className="model_header_close"  onClick={closeProject}>
                        <IoCloseSharp className='model_header_logo_cross'/>
                    </div>
                </div>
                <BlockchainTodo data={data}/>
            </section>
        }

        <div className="portfolio__container container grid">   
            <Zoom triggerOnce direction='fade' cascade  damping={0.1}>                 
            {
            portfolioData.map((project, index) => (
                    <div className="portfolio__content" key={index} onClick={()=>showModelContent(project)}>
                        <a className="portfolio__button">
                            <div rel="noopener noreferrer" >
                                <img className="w-100 border-radius-20-top" src={images[project.image]} alt={project.name}/>
                            </div>
                            <div className="card-inner h-100">
                                <div rel="noopener noreferrer" >
                                    <h3 className="portfolio__title">{project.name}</h3>
                                </div>
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
            ))}
            </Zoom>

        </div>
    </section></Motion>
  )
}

export default Portfolio
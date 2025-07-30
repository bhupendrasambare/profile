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
  }, []);

  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState(false);
  const [filterList, setFilterList] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const tags = [...new Set(portfolioData.flatMap(item => item.tags))];
    setFilterList(["All", ...tags]);
  }, []);

  function showModelContent(project) {
    setData(project);
    setShowModel(true);
  }

  function closeProject() {
    setShowModel(false);
  }

  useEffect(() => {
    // Load initial project list from JSON
    setAllProjects(portfolioData);
    setFilteredProjects(portfolioData);

    // Extract all unique tags and prepend "All"
    const tags = [...new Set(portfolioData.flatMap(item => item.tags))];
    setFilterList(["All", ...tags]);
  }, []);

  useEffect(() => {
    // First clear the current projects to simulate a delay effect
    setFilteredProjects([]);

    const timeout = setTimeout(() => {
      if (selectedTag === "All") {
        setFilteredProjects(allProjects);
      } else {
        const filtered = allProjects.filter(project =>
          project.tags.includes(selectedTag)
        );
        setFilteredProjects(filtered);
      }
    }, 50); // 0.5 second delay

    // Clean up the timeout if the component unmounts or tag changes quickly
    return () => clearTimeout(timeout);
  }, [selectedTag, allProjects]);


  return (
    <Motion>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Working</span>

        <div className="portfolio_filter__container">
          <div className='portfolio_filter_flex'>
            {filterList.map((tag, idx) => (
              <div
                key={tag}
                className={`filter-button-tag ${selectedTag === tag ? "active-tag" : ""}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {showModel && (
          <section className='model_box'>
            <div className="model_header">
              <div className="model_header_title">{data?.name}</div>
              <div className="model_header_close" onClick={closeProject}>
                <IoCloseSharp className='model_header_logo_cross' />
              </div>
            </div>
            <BlockchainTodo data={data} />
          </section>
        )}

        <div className="portfolio__container container grid">
          <Zoom triggerOnce direction='fade' cascade damping={0.1}>
            {filteredProjects.map((project, index) => (
              <div className="portfolio__content" key={index} onClick={() => showModelContent(project)}>
                <a className="portfolio__button">
                  <div>
                    <img className="w-100 border-radius-20-top" src={images[project.image]} alt={project.name} />
                  </div>
                  <div className="card-inner h-100">
                    <h3 className="portfolio__title">{project.name}</h3>
                    <div className='portfolio__flex p-3 d-flex'>
                      {Object.entries(project.tech).map(([techName, iconClass]) => (
                        <div className="tech-name" key={techName}>
                          <div><i className={`${iconClass} title-icon`} title={techName}></i></div>
                          <div>{techName}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Zoom>
        </div>
      </section>
    </Motion>
  );
};

export default Portfolio;

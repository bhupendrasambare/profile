import React from 'react'
import '../Style/Portfolio.css'
import { Motion } from '../../Component/Motion'

const Portfolio = () => {
  return (
    <Motion>
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Working</span>

        <div className="portfolio__container container grid">

            
            <div className="portfolio__content ">
                <img className="w-100 rounded-pill" src="https://source.unsplash.com/random/300x200/?building"/>
                <div className="m-5">

                    <a href='https://github.com/bhupendrasambare/course-management-react-spring-boot' target='_blank' className="portfolio__button">
                        <div>
                            <h3 className="portfolio__title">Course Management</h3>
                        </div>
                    </a>


                    <div className='portfolio__flex p-3'>
                        <i class='bx bxl-spring-boot portfolio__icon' ></i>
                        <i class='bx bxl-react portfolio__icon'></i>
                        <i class='bx bxs-data portfolio__icon' ></i>
                        <i className="bx bxl-github pl-2"></i>
                    </div>
                </div>

            </div>

            
            <div className="portfolio__content">
                <div>
                    <div className='portfolio__flex'>
                        <i class='bx bxl-spring-boot portfolio__icon' ></i>
                        <i class='bx bx-data portfolio__icon' ></i>
                    </div>
                    <h3 className="portfolio__title">Simple Blog</h3>
                </div>

                <a href='https://github.com/bhupendrasambare/Simple-blogminor-project' target='_blank' className="portfolio__button">View More
                    <i className="bx bxl-github pl-2"></i><i className="uil uil-arrow-right portfolio__button-icon"></i>
                </a>

            </div>
            
            <div className="portfolio__content">
                    <div>
                        <div className='portfolio__flex'>
                            <i class='bx bxl-spring-boot portfolio__icon' ></i>
                            <i class='bx bx-data portfolio__icon' ></i>
                        </div>
                        <h3 className="portfolio__title">Personal Blog</h3>
                    </div>

                    <a href='https://github.com/bhupendrasambare/spring-boot-personal-blog' target='_blank' className="portfolio__button">View More
                        <i className="bx bxl-github pl-2"></i><i className="uil uil-arrow-right portfolio__button-icon"></i>
                    </a>

            </div>

            
            <div className="portfolio__content">
                <div>
                    <div className='portfolio__flex'>
                        <i class='bx bxl-react portfolio__icon' ></i>
                        <i class='bx bxl-bootstrap portfolio__icon' ></i>
                    </div>
                    <h3 className="portfolio__title">Crypto Tracker</h3>
                </div>

                <a href='https://bhupendrasambare.github.io/React-Crypto-Tracker/' target='_blank' className="portfolio__button">View More
                    <i className="bx bx-globe pl-2"></i><i className="uil uil-arrow-right portfolio__button-icon"></i>
                </a>

            </div>
            
            <div className="portfolio__content">
                    <div>
                        <div className='portfolio__flex'>
                            <i class='bx bxl-spring-boot portfolio__icon' ></i>
                            <i class='bx bx-data portfolio__icon' ></i>
                        </div>
                        <h3 className="portfolio__title">Spring Boot REST API</h3>
                    </div>

                    <a href='https://github.com/bhupendrasambare/springboot-CRUD' target='_blank' className="portfolio__button">View More
                        <i className="bx bxl-github pl-2"></i><i className="uil uil-arrow-right portfolio__button-icon"></i>
                    </a>

            </div>

            
            <div className="portfolio__content">
                <div>
                    <div className='portfolio__flex'>
                        <i class='bx bxl-php portfolio__icon' ></i>
                        <i class='bx bxs-data portfolio__icon'></i>
                    </div>
                    <h3 className="portfolio__title">Live Chat</h3>
                </div>

                <a href='https://github.com/bhupendrasambare/PHP-webchat' target='_blank' className="portfolio__button">View More
                    <i className="bx bxl-github pl-2"></i><i className="uil uil-arrow-right portfolio__button-icon"></i>
                </a>

            </div>

                        
            

        </div>

    </section></Motion>
  )
}

export default Portfolio
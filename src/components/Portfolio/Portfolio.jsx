import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Working</span>

        <div className="portfolio__container container grid">

            
        <div className="portfolio__content">
                <div>
                    <i className="uil uil-web-grid portfolio__icon"></i>
                    <h3 className="portfolio__title">Web Developer</h3>
                </div>

                <span className="portfolio__button">View More
                    <i className="uil uil-arrow-right portfolio__button-icon"></i>
                </span>

            </div>

            
            <div className="portfolio__content">
                <div>
                    <i className="uil uil-web-grid portfolio__icon"></i>
                    <h3 className="portfolio__title">Web Developer</h3>
                </div>

                <span className="portfolio__button">View More
                    <i className="uil uil-arrow-right portfolio__button-icon"></i>
                </span>

            </div>

                        
            <div className="portfolio__content">
                <div>
                    <i className="uil uil-web-grid portfolio__icon"></i>
                    <h3 className="portfolio__title">Web Developer</h3>
                </div>

                <span className="portfolio__button">View More
                    <i className="uil uil-arrow-right portfolio__button-icon"></i>
                </span>

            </div>
            
            <div className="portfolio__content">
                <div>
                    <i className="uil uil-web-grid portfolio__icon"></i>
                    <h3 className="portfolio__title">Web Developer</h3>
                </div>

                <span className="portfolio__button">View More
                    <i className="uil uil-arrow-right portfolio__button-icon"></i>
                </span>

            </div>

            
            <div className="portfolio__content">
                <div>
                    <i className="uil uil-web-grid portfolio__icon"></i>
                    <h3 className="portfolio__title">Web Developer</h3>
                </div>

                <span className="portfolio__button">View More
                    <i className="uil uil-arrow-right portfolio__button-icon"></i>
                </span>

            </div>

                        
            <div className="portfolio__content">
                <div>
                    <i className="uil uil-web-grid portfolio__icon"></i>
                    <h3 className="portfolio__title">Web Developer</h3>
                </div>

                <span className="portfolio__button">View More
                    <i className="uil uil-arrow-right portfolio__button-icon"></i>
                </span>

                <div className="portfolio__modal">
                    <div className="portfolio__modal-content">
                    <i className="uil uil-times services_modal-close"></i><i className="uil uil-times services_modal-close"></i><i className="uil uil-times services_modal-close"></i>

                        <h3 className="portfolio__modal-title">Java Web Develper</h3>
                        <p className="portfolio__modal-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi iusto laboriosam esse nisi nesciunt provident.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Portfolio
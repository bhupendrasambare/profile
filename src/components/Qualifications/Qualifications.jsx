import React, { useState } from 'react'
import "./Qualifications.css"

const Qualifications = () => {

    const[toggle,setToggle] = useState(1);
    const toggleTab = (index) =>{
        setToggle(index)
    }

  return (
    <section className="qualification section" id="qualification">
        <h3 className="section__title">
            Qualification
        </h3>

        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">

                <div onClick={() =>setToggle(1)} className={toggle === 1 ?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                    <i class='bx bx-briefcase-alt-2'></i>
                    Experience
                </div>

                <div onClick={() =>setToggle(2)} className={toggle === 2 ?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                   <i class='bx bx-briefcase-alt-2'></i>
                    Education
                </div>

            </div>

            <div className="qualification__sections">
                
                <div className={toggle === 1 ?"qualification__content qualification__content-active":"qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                CSKA Automation
                            </h3>
                            <span className="qualification__subtitle">
                                Software Engineer Trainee
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> July 2022 - present
                            </div>

                        </div>
                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">
                                CSKA Automation
                            </h3>
                            <span className="qualification__subtitle">
                                Java Developer Intern
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> April 2022 - June 2022
                            </div>

                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Apoliums Infotech Indore
                            </h3>
                            <span className="qualification__subtitle">
                                Web Developer
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> June 2021 - August 2021
                            </div>

                        </div>
                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                </div>
                
                <div className={toggle === 2 ?"qualification__content qualification__content-active":"qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                IPS Academy Indore
                            </h3>
                            <span className="qualification__subtitle">
                                B.tech (8.2 CGPA) <small>currently</small>
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2023
                            </div>

                        </div>
                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">
                                Nadekar Jr. Collage
                            </h3>
                            <span className="qualification__subtitle">
                                12<sup>th</sup> (69% PCMB)
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - present
                            </div>

                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Evergreen English High School
                            </h3>
                            <span className="qualification__subtitle">
                                10<sup>th</sup> (78%)
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - present
                            </div>

                        </div>
                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    </section>
  )
}

export default Qualifications
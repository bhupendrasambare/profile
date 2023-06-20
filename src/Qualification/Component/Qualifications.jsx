import React, { useState } from 'react'
import "../Style/Qualifications.css"
import { Motion } from '../../Component/Motion';

const Qualifications = () => {

    const[toggle,setToggle] = useState(1);
    const toggleTab = (index) =>{
        setToggle(index)
    }

  return (
    <Motion>
    <section className="qualification section" id="qualification">
        <h3 className="section__title">
            Qualification
        </h3>

        <span className="section__subtitle">My Professional Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">

                <div onClick={() =>setToggle(1)} className={toggle === 1 ?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                    <i className='bx bx-briefcase-alt-2'></i>
                    Experience
                </div>

                <div onClick={() =>setToggle(2)} className={toggle === 2 ?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                   <i className='bx bx-briefcase-alt-2'></i>
                    Education
                </div>

            </div>

            <div className="qualification__sections container">
                
                <div className={toggle === 1 ?"qualification__content qualification__content-active":"qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <div className='justify-content-center'>
                                <div className='qualification-images-limit'>
                                    <img className="w-100 ml-auto qualification-images" src="https://source.unsplash.com/random/?coading"/>
                                </div>
                                <div className=''>
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
                            <div className='justify-content-center'>
                                <div className='w-100'>
                                    <img className="w-100 ml-auto qualification-images" src="https://source.unsplash.com/random/?building"/>
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
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <div className='justify-content-center'>
                                <div className='qualification-images-limit'>
                                    <img className="w-100 ml-auto qualification-images" src="https://source.unsplash.com/random/?tech"/>
                                </div>
                                <div className=''>
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
                        <div></div>

                        <div>
                            <span className="qualification__rounder">

                            </span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <div className='justify-content-center'>
                                <div className='w-100'>
                                    <img className="w-100 ml-auto qualification-images" src="https://upload.wikimedia.org/wikipedia/en/6/6c/Institute_of_Engineering_and_Science_IPS_Academy_logo.jpg"/>
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
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <div className='justify-content-center'>
                                <div className='qualification-images-limit'>
                                    <img className="w-100 ml-auto qualification-images" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Seal_of_Maharashtra.svg"/>
                                </div>
                                <div className=''>
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
                            <div className='justify-content-center'>
                                <div className='w-100'>
                                    <img className="w-100 ml-auto qualification-images" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Seal_of_Maharashtra.svg"/>
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
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    </section>
    </Motion>
  )
}

export default Qualifications
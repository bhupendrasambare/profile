import React, { useEffect, useState } from 'react'
import "../Style/Qualifications.css"
import { Motion } from '../../Component/Motion';
import { Slide } from 'react-awesome-reveal';
import Vivatech from "../../assets/company/vivatech_r_d_logo.jpeg"
import CSKA from "../../assets/company/cska automation.jpeg"
import Apoliums from "../../assets/company/apoliums.jpeg"

const Qualifications = () => {

    const[toggle,setToggle] = useState(1);
    const toggleTab = (index) =>{
        setToggle(index)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
  return (
    <Motion>
    <section className="qualification section" id="qualification">
        <Slide direction='up'>
            <h3 className="section__title">
                Qualification
            </h3>
        <span className="section__subtitle">My Professional Journey</span>
        </Slide>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <Slide direction='up'>
                    <div onClick={() =>setToggle(1)} className={toggle === 1 ?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                        <i className='bx bx-briefcase-alt-2'></i>
                        Experience
                    </div>
                </Slide>
                <Slide direction='up'>
                    <div onClick={() =>setToggle(2)} className={toggle === 2 ?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                    <i className='bx bx-briefcase-alt-2'></i>
                        Education
                    </div>
                </Slide>

            </div>

            <div className="qualification__sections container">
                
                <div className={toggle === 1 ?"qualification__content qualification__content-active":"qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <div className='justify-content-center'>
                                <Slide direction='up'>
                                    <div className='qualification-images-limit'>
                                        <img className=" ml-auto qualification-images" src={Vivatech}/>
                                    </div>
                                    <div className=''>
                                        <h3 className="qualification__title">
                                            Viva Tech R&D
                                        </h3>
                                        <span className="qualification__subtitle">
                                            Java Software Developer
                                        </span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calendar-alt"></i> February 2023 - present
                                        </div>
                                    </div>
                                </Slide>
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
                                <Slide direction='up'>
                                    <div className='w-100'>
                                        <img className=" ml-auto qualification-images" src={CSKA}/>
                                    </div>
                                    <div>

                                        <h3 className="qualification__title">
                                            CSKA Automation
                                        </h3>
                                        <span className="qualification__subtitle">
                                            Java Developer Intern
                                        </span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calendar-alt"></i> April 2022 - January 2023
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data"> 
                        <div>
                            <div className='justify-content-center'>
                                <Slide direction='up'>
                                    <div className='qualification-images-limit'>
                                        <img className=" ml-auto qualification-images" src={Apoliums}/>
                                    </div>
                                    <div className=''>
                                        <h3 className="qualification__title">
                                            Apoliums Infotech
                                        </h3>
                                        <span className="qualification__subtitle">
                                            PHP Developer Intern
                                        </span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calendar-alt"></i> June 2021 - August 2021
                                        </div>
                                    </div>
                                </Slide>
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
                                <Slide direction='up'>
                                    <div className='w-100'>
                                        <img className=" ml-auto qualification-images" src="https://upload.wikimedia.org/wikipedia/en/6/6c/Institute_of_Engineering_and_Science_IPS_Academy_logo.jpg"/>
                                    </div>
                                    <div>
                                        <h3 className="qualification__title">
                                            Computer Science & IT
                                        </h3>
                                        <span className="qualification__subtitle">
                                            IPS Academy Indore
                                        </span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calendar-alt"></i> 2019 - 2023
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <div className='justify-content-center'>
                                <Slide direction='up'>
                                    <div className='qualification-images-limit'>
                                        <img className=" ml-auto qualification-images" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Seal_of_Maharashtra.svg"/>
                                    </div>
                                    <div className=''>
                                        <h3 className="qualification__title">
                                            Nadekar Jr. collage
                                        </h3>
                                        <span className="qualification__subtitle">
                                            Maharashtra HSC
                                        </span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calendar-alt"></i> 2017 - 2019
                                        </div>
                                    </div>
                                </Slide>
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
                                <Slide direction='up'>
                                    <div className='w-100'>
                                        <img className=" ml-auto qualification-images" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Seal_of_Maharashtra.svg"/>
                                    </div>
                                    <div>

                                        <h3 className="qualification__title">
                                            Evergreen Highschool
                                        </h3>
                                        <span className="qualification__subtitle">
                                            Maharashtra SSC
                                        </span>
                                        <div className="qualification__calender">
                                            <i className="uil uil-calendar-alt"></i> 2015 - 2017
                                        </div>
                                    </div>
                                </Slide>
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
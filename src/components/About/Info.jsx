import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experiecne</h3>
            <span className="about__subtitle">11+ Month</span>
        </div>
        
        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10+ Projects</span>
        </div>
        
        <div className="about__box">
            <i className='bx bx-badge-check about__icon'></i>
            <h3 className="about__title">Certificates</h3>
            <span className="about__subtitle">16+ Certificates </span>
        </div>


    </div>
  )
}

export default Info
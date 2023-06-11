import React, { useEffect, useState } from 'react'

const Info = () => {
  const [month,setMonth] = useState(0);
  const [year,setYear] = useState(0)
  useEffect(()=>{
      const d2 = new Date();
      const d1 = new Date('January 01, 2022 10:15:30');
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      setYear(Math.floor(months/12));
      months = (months<12)?months:month%12;
      setMonth((months <= 0) ? 0 : months);
  },[])
  return (
    <div className="about__info grid">
        
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experiecne</h3>
            <span className="about__subtitle">{year} Year {month} Month</span>
        </div>
        
        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">20+ Projects</span>
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
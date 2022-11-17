import React from 'react'
import Backend from './Backend'
import Frontnd from './Frontnd'
import "./Skills.css"

const Skills = () => {
  return (
    <section className="skill section" id='skills'>
        <h3 className="section__title">
            Skills
        </h3>

        <span className="section__subtitle">My Technical Levels</span>

        <div className="skills__container container grid">
            <Frontnd/>
            <Backend/>
        </div>

    </section>
  )
}

export default Skills
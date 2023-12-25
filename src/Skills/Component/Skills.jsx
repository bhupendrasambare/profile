import React, { useEffect } from 'react'
import Backend from './Backend'
import Cloud from './Cloud'
import Database from './Database'
import Frontnd from './Frontnd'
import "../Style/Skills.css"
import { Motion } from '../../Component/Motion'

const Skills = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])
  return (
    <Motion>
    <section className="skill section" id='skills'>
        <h3 className="section__title">
            Skills
        </h3>

        <span className="section__subtitle">My Technical Levels</span>

        <div className="skills__container container grid">
            <Backend/>
            <Frontnd/>
            <Database/>
            <Cloud/>
        </div>

    </section></Motion>
  )
}

export default Skills
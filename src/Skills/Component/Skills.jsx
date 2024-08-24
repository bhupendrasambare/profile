import React, { useEffect } from 'react'
import Backend from './Backend'
import Cloud from './Cloud'
import Database from './Database'
import Frontnd from './Frontnd'
import "../Style/Skills.css"
import { Motion } from '../../Component/Motion'
import { FaJava } from 'react-icons/fa'
import { SiAmazonec2, SiApachekafka, SiApachetomcat, SiBootstrap, SiGithub, SiHibernate, SiJavascript, SiJenkins, SiMysql, SiPhp, SiReact, SiSpringboot, SiVaadin } from 'react-icons/si'
import { Zoom } from 'react-awesome-reveal'

const Skills = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])
  return (
    <Motion>
    <section className="skill section" id='skills'>
        <Zoom triggerOnce direction='fade' cascade  damping={0.1}>
        <h3 className="section__title">
            Skills
        </h3>

        <span className="section__subtitle">My Technical Levels</span>
        </Zoom>

        <div className="skills__container container">
            <div className="skills-card-container">
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <FaJava className="bg-java"/>
                    </div>
                    <h3 className='skills__name_title'>Java</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiSpringboot className="bg-spring-boot"/>
                    </div>
                    <h3 className='skills__name_title'>Spring Boot</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiHibernate className="bg-hibernate"/>
                    </div>
                    <h3 className='skills__name_title'>Hibernate</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiApachekafka className="bg-Kafka"/>
                    </div>
                    <h3 className='skills__name_title'>Apache Kafka</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                {/* <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiPhp className="bg-php"/>
                    </div>
                    <h3 className='skills__name_title'>PHP</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom> */}
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiJavascript className="bg-javascript"/>
                    </div>
                    <h3 className='skills__name_title'>Javascript</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiReact className="bg-react" />
                    </div>
                    <h3 className='skills__name_title'>React Js</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiVaadin className="bg-react" />
                    </div>
                    <h3 className='skills__name_title'>Vaadin Hilla</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                {/* <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiBootstrap className="bg-bootstrap" />
                    </div>
                    <h3 className='skills__name_title'>BootStrap</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom> */}
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiMysql className="bg-data" />
                    </div>
                    <h3 className='skills__name_title'>MySql</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiJenkins class='bg-aws' />
                    </div>
                    <h3 className='skills__name_title'>Jenkins</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiApachetomcat className="bg-category-alt" />
                    </div>
                    <h3 className='skills__name_title'>Tomcat</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiAmazonec2 className="bg-aws" />
                    </div>
                    <h3 className='skills__name_title'>AWS EC2</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
                <Zoom direction='fade' cascade  damping={0.1}>
                <div className="skills-card-main">
                    <div className="skill_icon_top">
                        <SiGithub className="bg-github" />
                    </div>
                    <h3 className='skills__name_title'>Github</h3>
                    <span className='skills__level'>Proficient</span>
                </div>
                </Zoom>
            </div>
            {/* <Backend/>
            <Frontnd/>
            <Database/>
            <Cloud/> */}
        </div>

    </section></Motion>
  )
}

export default Skills
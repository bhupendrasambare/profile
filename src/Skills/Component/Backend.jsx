import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Technology</h3>

        <div className="skills__box">
            <div className="skills__group">
                <Slide direction='up' cascade  damping={0.1}>
                <div className="skills__data">
                    <i className="bx bxl-spring-boot"></i>

                    <div>
                        <h3 className='skills__name'>Spring Boot</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i className="bx bxl-spring-boot"></i>

                    <div>
                        <h3 className='skills__name'>Hibernate</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                </Slide>
                
            </div>
            <div className="skills__group">
                <Slide direction='up' cascade  damping={0.1}>
                <div className="skills__data">
                    <i className="bx bxl-java"></i>

                    <div>
                        <h3 className='skills__name'>Java</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-php"></i>

                    <div>
                        <h3 className='skills__name'>PHP</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                </Slide>

            </div>
        </div>
    </div>
  )
}

export default Backend
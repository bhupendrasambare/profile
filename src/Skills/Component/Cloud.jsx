import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Cloud = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Dev Tools</h3>

        <div className="skills__box">
            <div className="skills__group">
                <Slide direction='up' cascade  damping={0.1}>
                <div className="skills__data">
                    <i class='bx bx-category-alt'></i>

                    <div>
                        <h3 className='skills__name'>Jenkins</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-category-alt'></i>

                    <div>
                        <h3 className='skills__name'>Apache Tomcat</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                </Slide>
                
            </div>
            <div className="skills__group">
                <Slide direction='up' cascade  damping={0.1}>
                <div className="skills__data">
                    <i className="bx bxl-aws"></i>

                    <div>
                        <h3 className='skills__name'>EC2</h3>
                        <span className='skills__level'>Basics</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-github"></i>

                    <div>
                        <h3 className='skills__name'>Github</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                </Slide>

            </div>
        </div>
    </div>
  )
}

export default Cloud
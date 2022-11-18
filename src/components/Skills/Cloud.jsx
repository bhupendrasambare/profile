import React from 'react'

const Cloud = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Dev Tools</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <i className="bx bxl-git"></i>

                    <div>
                        <h3 className='skills__name'>Git Bash</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

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
                
            </div>
            <div className="skills__group">

                <div className="skills__data">
                    <i className="bx bxl-aws"></i>

                    <div>
                        <h3 className='skills__name'>EC2</h3>
                        <span className='skills__level'>Basics</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-aws"></i>

                    <div>
                        <h3 className='skills__name'>S3</h3>
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

            </div>
        </div>
    </div>
  )
}

export default Cloud
import React from 'react'

const Frontnd = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Technology</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <i className="bx bxl-react"></i>

                    <div>
                        <h3 className='skills__name'>React Js</h3>
                        <span className='skills__level'>Basics</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-bootstrap"></i>

                    <div>
                        <h3 className='skills__name'>BootStrap</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-css3"></i>

                    <div>
                        <h3 className='skills__name'>CSS</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">

                <div className="skills__data">
                    <i className="bx bxl-jquery"></i>

                    <div>
                        <h3 className='skills__name'>JQuery</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-javascript"></i>

                    <div>
                        <h3 className='skills__name'>Javascript</h3>
                        <span className='skills__level'>Basics</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-html5"></i>

                    <div>
                        <h3 className='skills__name'>HTML</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Frontnd
import React from 'react'

const Database = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Database Technology</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <i className="bx bxs-data"></i>

                    <div>
                        <h3 className='skills__name'>MySql<br/> &ensp;</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>
                
            </div>
            <div className="skills__group">

                <div className="skills__data">
                    <i className="bx bx-data"></i>

                    <div>
                        <h3 className='skills__name'>H2 Database</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Database
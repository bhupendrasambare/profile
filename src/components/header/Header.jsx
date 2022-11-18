import React, { useState } from 'react'
import "./header.css"

const Header = () => {

    const [toggle,showMenu] = useState(false);

  return (
    <div className='header'>
        <div className=' nav container'>
            <a href='#home' className='nav__logo'>Bhupendra</a>

            <div className={toggle ? 'nav__menu show-menu':"nav__menu"}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active">
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#qualification" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>Qualification
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>

                <i className='uil uil-times nav__close'  onClick={() => showMenu(!toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </div>
    </div>
  )
}

export default Header
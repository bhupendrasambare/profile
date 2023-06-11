import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer" id='contact'>
        <div className="footer__container container">
            <h1 className="footer__title">Bhupendra</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href='https://www.linkedin.com/in/bhupendrasambare/' target="_blank"  className="footer__social-link">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href='https://github.com/bhupendrasambare' target="_blank" className="footer__social-link">
                    <i className="bx bxl-github"></i>
                </a>
                <a href='https://www.instagram.com/bhupendra.sambare/' target="_blank" className="footer__social-link">
                    <i className="bx bxl-instagram"></i>
                </a>

            </div>
                <span className="footer__copy">
                    bhupendrasam1404@gmail.com
                </span>

        </div>
    </section>
  )
}

export default Footer
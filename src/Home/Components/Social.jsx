import React from 'react'
import { Roll} from 'react-awesome-reveal'

const Social = () => {
  return (
    <div className="home__social">
    <Roll direction='up'>
      <a href='https://twitter.com/bhupendra_SAM' target="_blank" className="home__social-icon">
          <i className="uil uil-twitter-alt"></i>
      </a>

      <a href='https://www.linkedin.com/in/bhupendrasambare/' target="_blank" className="home__social-icon">
          <i className="uil uil-linkedin-alt"></i>
      </a>
      
      <a href='https://github.com/bhupendrasambare' target="_blank" className="home__social-icon">
          <i className="uil uil-github-alt"></i>
      </a>
      
      <a href='https://www.instagram.com/bhupendra.sambare/' target="_blank" className="home__social-icon">
          <i className="uil uil-instagram"></i>
      </a>
    </Roll>
    </div>
  )
}

export default Social
import React from 'react'
import { JackInTheBox} from 'react-awesome-reveal'

const Social = () => {
  return (
    <div className="home__social">
    <JackInTheBox direction='up'>
      <a href='https://twitter.com/bhupendra_SAM' target="_blank" className="home__social-icon">
          <i className="uil uil-twitter-alt"></i>
      </a>
    </JackInTheBox>
      <JackInTheBox direction='up'>
        <a href='https://www.linkedin.com/in/bhupendrasambare/' target="_blank" className="home__social-icon">
            <i className="uil uil-linkedin-alt"></i>
        </a>
      </JackInTheBox>
      <JackInTheBox direction='up'>
        <a href='https://github.com/bhupendrasambare' target="_blank" className="home__social-icon">
            <i className="uil uil-github-alt"></i>
        </a>
      </JackInTheBox>
      <JackInTheBox direction='up'>
        <a href='https://www.instagram.com/bhupendra.sambare/' target="_blank" className="home__social-icon">
            <i className="uil uil-instagram"></i>
        </a>
      </JackInTheBox>
    </div>
  )
}

export default Social
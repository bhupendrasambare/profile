import React from 'react'
import Data from './Data'
import '../Style/home.css'
import ScrollDown from './ScrollDown'
import Social from './Social'
import { Motion } from '../../Component/Motion'

const Home = () => {
  return (
    <Motion>
      <section className="home section bg-dark text-light" id="home">
          <div className="home__container container grid">
              <div className="home__content grid">
                  <Social/>
                  
                  <div className="home__img"></div>

                  <Data/>
              </div>
          </div>
      </section>
    </Motion>
  )
}

export default Home
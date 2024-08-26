import React, { useEffect } from 'react'
import { Motion } from '../Component/Motion'
import "./style/Blockchiantodo.css"
import BCT_IMAGE from "../assets/todo.jpg"
import { BiGlobe, BiLogoGithub, BiLogoReact, BiSolidComponent, BiSolidHardHat } from 'react-icons/bi'
import { Slide } from 'react-awesome-reveal'
import coursemangement from "./../assets/course-management.avif"
import blogImage from "./../assets/blog-img.avif"
import RestApi from "./../assets/rest-api.jpg"
import cryptoTracker from "./../assets/crypto-tracker.jpeg"
import Todo from "./../assets/todo.jpg"
import Donation from "./../assets/donation.jpg"
import Weather from "./../assets/weather.png"
import Movies from "./../assets/movies.png"
import Microservices from "./../assets/microservices.png"

const images = {
    coursemangement,
    blogImage,
    RestApi,
    blogImage,
    Todo,
    Donation,
    cryptoTracker,
    Weather,
    Movies,
    Microservices
  };

const BlockchainTodo = ({data}) => {

    return (
        <Motion>
            <section className="portfolio section" id="portfolio">
                <div className="bct_flex-box">
                    <div className="bct_intro">
                        <Slide direction='left' triggerOnce cascade  damping={0.1}>
                            <div className="bct_title">
                                {data.name}
                            </div>
                            <div className="bct_description">
                                {data.description}
                            </div>
                            <div className="bct_tech_stack">
                                {Object.entries(data.tech).map(([techName, iconClass]) => (
                                    <>
                                        <div className="">
                                            <div>
                                                <i className={iconClass+" remove_extras"} title={techName} key={techName}></i>
                                            </div>
                                        </div>
                                    </>
                                ))}
                                {/* <BiSolidComponent className='bct_tech_stack_logo' title='Blockchain'/>
                                <BiSolidHardHat className='bct_tech_stack_logo' title='Hardhat'/>
                                <BiLogoReact className='bct_tech_stack_logo' title='React Js'/>
                                <BiLogoGithub className='bct_tech_stack_logo' title='Github'/> */}
                            </div>
                            <div className="btc_button_section">
                                <a className="bct_btn_github" target='_blank' href={data.link}>
                                    <BiLogoGithub className='bct_BiLogoGithub'/>
                                    <div className="bct_btn_desc">
                                        Github
                                    </div>
                                </a>
                                {
                                    data.live && 
                                    <a className="bct_btn_Website" target='_blank' href={data.git}>
                                        <BiGlobe className='bct_BiGlobe'/>
                                        <div className="bct_btn_desc">
                                            Website
                                        </div>
                                    </a>
                                }
                            </div>
                        </Slide>
                    </div>
                    <div className="bct_image">
                        <Slide direction='up' triggerOnce cascade  damping={0.3}>
                        <div className="bct_image_center">
                            <img src={images[data.image]} className='bct_image-orignal'/>
                        </div>
                        </Slide>
                    </div>
                </div>
            </section>
        </Motion>
    )
}

export default BlockchainTodo
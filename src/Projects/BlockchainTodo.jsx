import React, { useEffect } from 'react'
import { Motion } from '../Component/Motion'
import "./style/Blockchiantodo.css"
import BCT_IMAGE from "../assets/todo.jpg"
import { BiGlobe, BiLogoGithub, BiLogoReact, BiSolidComponent, BiSolidHardHat } from 'react-icons/bi'
import { Slide } from 'react-awesome-reveal'

const BlockchainTodo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Motion>
            <section className="portfolio section" id="portfolio">
                <div className="bct_flex-box">
                    <div className="bct_intro">
                        <Slide direction='left' triggerOnce cascade  damping={0.3}>
                            <div className="bct_title">
                                Blockchain TODO Application
                            </div>
                            <div className="bct_description">
                                Blockchain Todo DApp is a decentralized application
                                for storing retrieving and deleting your
                                daily task list making your day easy
                            </div>
                            <div className="bct_tech_stack">
                                <BiSolidComponent className='bct_tech_stack_logo' title='Blockchain'/>
                                <BiSolidHardHat className='bct_tech_stack_logo' title='Hardhat'/>
                                <BiLogoReact className='bct_tech_stack_logo' title='React Js'/>
                                <BiLogoGithub className='bct_tech_stack_logo' title='Github'/>
                            </div>
                            <div className="btc_button_section">
                                <a className="bct_btn_github" href='https://github.com/bhupendrasambare/Blockchain-TODO'>
                                    <BiLogoGithub className='bct_BiLogoGithub'/>
                                    <div className="bct_btn_desc">
                                        Github
                                    </div>
                                </a>
                                <a className="bct_btn_Website" href='https://github.com/bhupendrasambare/Blockchain-TODO'>
                                    <BiGlobe className='bct_BiGlobe'/>
                                    <div className="bct_btn_desc">
                                        Github
                                    </div>
                                </a>
                            </div>
                        </Slide>
                    </div>
                    <div className="bct_image">
                        <Slide direction='up' triggerOnce cascade  damping={0.3}>
                        <div className="bct_image_center">
                            <img src={BCT_IMAGE} className='bct_image-orignal'/>
                        </div>
                        </Slide>
                    </div>
                </div>
            </section>
        </Motion>
    )
}

export default BlockchainTodo
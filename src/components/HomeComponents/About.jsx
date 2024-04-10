import React from 'react'
import '../../componentstyles/HomeComponentStyles/About.css'
import Ivanthedevx from '../../lotties/Ivanthedevx'
import Ivanthedevig from '../../lotties/Ivanthedevig'
import Ivanthedevtiktok from '../../lotties/Ivanthedevtiktok'
import Ivanthedevblogging from '../../lotties/Ivanthedevblogging'
import Ivanthedevlinkedin from '../../lotties/Ivanthedevlinkedin'
import { Cloudinary } from "@cloudinary/url-gen";

export default function About() {

    const cld = new Cloudinary({ cloud: { cloudName: 'doqbnfais' } });

    return (
        <div className='about-section'>

            <div className="about-section-columns">

                <div className="about-section-column-one">
                    <img
                        className='about-section-ivan-rotating-gif'
                        src="https://res.cloudinary.com/doqbnfais/image/upload/v1712725022/Ivan%20the%20Dev%20assets/images/ivan-the-dev-rotating-gif_eujvia.gif"
                        alt="Ivan the Dev logo rotating GIF"
                    />
                </div>

                <div className="about-section-column-two">

                    <div className="about-me-title-pill">
                        <h2>About Me</h2>
                    </div>

                    <div className="about-text">

                        <h2 className='about-section-header'>Helping individuals and businesses tranform ideas into reality</h2>
                        <p className='about-section-paragraph'>
                            Have you ever wondered how some websites and apps combine functionality, design,
                            and user experience in a seamless way?
                            If you have, then you might be interested in meeting me,
                            a developer who creaties captivating and
                            interactive digital products. I am a full stack web (MERN) and app (React Native) developer 
                            who crafts web and
                            app solutions that tell a story, solve a problem, & inspire positive action.
                            Whether you need a website for your business, a mobile app for your customers,
                            or a hybrid app for both, I can help you turn your vision into reality😊.
                        </p>

                    </div>

                    <div className="ivan-the-dev-social-media">
                        <h4><span>Let's </span>connect:</h4>

                        <div className="ivan-the-dev-social-media-icons">

                            <div className="ivan-the-dev-x">
                                <a target='_blank' href="https://twitter.com/ivanthedev_guru">
                                    <Ivanthedevx />
                                </a>
                            </div>

                            <div className="ivan-the-dev-instagram">
                                <a target='_blank' href="https://instagram.com/ivanthedev">
                                    <Ivanthedevig />
                                </a>
                            </div>

                            <div className="ivan-the-dev-tiktok">
                                <a target='_blank' href="https://tiktok.com/@ivanthedev.guru">
                                    <Ivanthedevtiktok />
                                </a>
                            </div>

                            <div className="ivan-the-dev-linkedin">
                                <a target='_blank' href="https://linkedin.com/in/chengoleivan">
                                    <Ivanthedevlinkedin />
                                </a>
                            </div>

                            <div className="ivan-the-dev-blogging">
                                <a target='_blank' href="https://stoiccodes.com/">
                                    <Ivanthedevblogging />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

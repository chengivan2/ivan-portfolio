import React from 'react'
import '../componentstyles/About.css'
import ivanthedevrotatingGIF from '../assets/images/ivan-the-dev-rotating-gif.gif'

export default function About() {
  return (
    <div className='about-section'>
            <div className="about-section-columns">
                <div className="about-section-column-one">
                    <img 
                        className='about-section-ivan-rotating-gif' 
                        src={ivanthedevrotatingGIF} 
                        alt="Ivan the Dev bot" 
                    /> 
                </div>

                <div className="about-section-column-two">
                    <div className="about-me-title-pill">
                        About Me
                    </div>
                    <h2 className='about-section-header'>Helping individuals and businesses tranform ideas into reality</h2>
                    <p className='about-section-paragraph'>
                    Have you ever wondered how some websites and apps combine functionality, design, 
                    and user experience in a seamless way?  
                    If you have, then you might be interested in meeting me, 
                    a web and app developer who specializes in creating captivating and 
                    interactive digital products. I specialize in MERN stack - and in combination 
                    with other technologies - use it to craft web and 
                    app solutions that tell a story, solve a problem, or inspire an action. 
                    Whether you need a website for your business, a mobile app for your customers, 
                    or a hybrid app for both, I can help you turn your vision into reality.😊
                    </p>
                </div>
            </div>
        </div>
  )
}

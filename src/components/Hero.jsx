import React from 'react'
import "../componentstyles/Hero.css"
import ivanthedevBot from '../assets/images/ivan-the-dev-bot-svg.svg'

export default function Hero() {
    return (
        <div className='hero-section'>
            <div classNames="hero-section-columns flex-change-section">
                <div className="hero-section-column-one">
                    <h2 className='hero-section-header'>Hi, I'm Ivan</h2>
                    <p className='hero-section-paragraph'>Guru? Maybe not. But I'm a competent web developer.</p>
                    <div className="hero-section-main-cta">
                        <a href="">
                            <div className="hero-section-main-cta-link">
                                Get Quote
                            </div>
                        </a>
                    </div>
                </div>

                <div className="hero-section-column-two">
                    <img className='hero-section-ivanthedevbot' src={ivanthedevBot} alt="Ivan the Dev bot" />
                </div>
            </div>
        </div>
    )
}

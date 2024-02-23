import React from 'react'
import '../../componentstyles/HomeComponentStyles/Hero.css'
import ivanthedevBot from '../../assets/images/ivan-the-dev-bot-svg.svg'
import ExampleComponent from './Typeanimationhero'

export default function Hero() {
    return (
        <div className='hero-section'>
            <div className="hero-section-columns">
                <div className="hero-section-column-one">
                    <h2 className='hero-section-header'>Hi, I'm Ivan</h2>
                    <p className='hero-section-paragraph'>Guru? Maybe not. But <ExampleComponent />.</p>
                    <div className="hero-section-main-cta">
                        <a href="#homecontactform">
                            <div className="hero-section-main-cta-link">
                                Talk to me
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

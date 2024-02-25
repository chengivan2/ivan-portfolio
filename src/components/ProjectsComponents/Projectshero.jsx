import React from 'react'
import '../../componentstyles/ProjectsComponentStyles/Projectshero.css'
import ivanthedevBot from '../../assets/images/ivan-the-dev-bot-svg.svg'
import ExampleComponent from './Typeanimationhero'

export default function Hero() {
    return (
        <div className='pr-hero-section'>
            <div className="pr-hero-section-columns">
                <div className="pr-hero-section-column-one">
                    <h2 className='pr-hero-section-header'>Hi, I'm Ivan</h2>
                    <p className='pr-hero-section-paragraph'>Guru? Maybe not. But <ExampleComponent />.</p>
                    <div className="pr-hero-section-main-cta">
                        <a href="#prcontactform">
                            <div className="pr-hero-section-main-cta-link">
                                Talk to me
                            </div>
                        </a>
                    </div>
                </div>

                <div className="pr-hero-section-column-two">
                    <img className='pr-hero-section-ivanthedevbot' src={ivanthedevBot} alt="Ivan the Dev bot" />
                </div>
            </div>
        </div>
    )
}

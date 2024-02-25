import React from 'react'
import '../../componentstyles/ProjectsComponentStyles/Projectshero.css'
import ivanthedevBot from '../../assets/images/ivan-the-dev-bot-svg.svg'
import Projectstypinganimation from './Typeanimationhero'

export default function ProjectsHero() {
    return (
        <div className='pr-hero-section'>
            <div className="pr-hero-section-columns">
                <div className="pr-hero-section-column-one">
                    <h2 className='pr-hero-section-header'>Hi, there</h2>
                    <p className='pr-hero-section-paragraph'>Welcome to my projects page. Here you can see what it is I am capable of.</p>

                    <div className="pr-hero-section-paragraph">
                        <p><Projectstypinganimation /></p>
                    </div>
                </div>

                <div className="pr-hero-section-column-two">
                    <img className='pr-hero-section-ivanthedevbot' src={ivanthedevBot} alt="Ivan the Dev bot" />
                </div>
            </div>
        </div>
    )
}

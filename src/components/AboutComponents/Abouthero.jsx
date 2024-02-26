import React from 'react'
import '../../componentstyles/AboutComponentStyles/Abouthero.css'
import ivanthedevBot from '../../assets/images/ivan-the-dev-bot-svg.svg'
import Abouttypinganimation from './Typeanimationhero'
import Aboutheader from './Aboutheader'

export default function Abouthero() {
    return (
        <div className='abt-hero-section'>
            <div className="about-overlay"></div>
            <div className="abt-hero-section-columns">
                <div className="about-header-hero">
                    <Aboutheader />
                </div>
                <div className="abt-hero-section-column-one">
                    <h2 className='abt-hero-section-header'>Hi, there</h2>
                    <p className='abt-hero-section-paragraph'>Welcome to my projects page. Here you can see what it is I am capable of.</p>

                    <div className="abt-hero-section-paragraph">
                        <p><Abouttypinganimation /></p>
                    </div>
                </div>

                <div className="abt-hero-section-column-two">
                    <img className='abt-hero-section-ivanthedevbot' src={ivanthedevBot} alt="Ivan the Dev bot" />
                </div>
            </div>
        </div>
    )
}

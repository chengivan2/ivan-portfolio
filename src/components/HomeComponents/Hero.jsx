import React from 'react'
import '../../componentstyles/HomeComponentStyles/Hero.css'
import ExampleComponent from './Typeanimationhero'
import { Cloudinary } from "@cloudinary/url-gen";

export default function Hero() {

    const cld = new Cloudinary({ cloud: { cloudName: 'doqbnfais' } });

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
                    <img className='hero-section-ivanthedevbot' 
                    src="https://res.cloudinary.com/doqbnfais/image/upload/v1712724958/Ivan%20the%20Dev%20assets/images/ivan-the-dev-bot-svg_uwcha9.svg" 
                    alt="Ivan the Dev bot" />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import '../componentstyles/Header.css'
import ivanLogo from '../assets/images/ivan-the-dev-logo-svg.svg'

export default function Header() {
    return (
        <div className='header'>
            <div className="header-content-pill">
                <div className="header-logo">
                    <a href="http://"><img src={ivanLogo} alt="Ivan the Dev logo" /></a>
                </div>

                <div className="header-main-menu">
                    <ul>
                        <li><a href="http://">Home</a></li>
                        <li><a href="http://">Projects</a></li>
                        <li><a href="http://">Contact</a></li>
                        <li><a href="http://">About</a></li>
                    </ul>
                </div>

                <div className="header-cta-button">
                    <a href="">
                        <div className="header-cta-button-link">
                            Get Started
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import '../../componentstyles/HomeComponentStyles/Homeheader.css'
import ivanLogo from '../../assets/images/ivan-the-dev-logo-header.svg'
import Callanimation from '../../lotties/Callanimation'
import { NavLink } from 'react-router-dom'
import Homeheadermodal from './Homeheadermodal'

export default function Homeheader() {

    return (
        <div className='home-header'>
            <div className='home-header-content-pill' id="myHeader">
                <div className="home-header-logo">
                    <a href="https://ivanthedev.guru"><img src={ivanLogo} alt="Ivan the Dev logo" /></a>
                </div>

                <div className="home-header-hamburger-menu">
                    <Homeheadermodal />
                </div>

                <div className="home-header-main-menu">
                    <nav id='home-header-main-nav'>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                    </nav>
                </div>

                <div className="home-header-cta-button">
                    <a href="tel:254712551324">
                        <div className="home-header-cta-button-link">
                            <h4>Call me</h4>
                            <Callanimation />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import '../../componentstyles/AboutComponentStyles/Aboutheader.css'
import ivanLogo from '../../assets/images/ivan-the-dev-logo-header.svg'
import Callanimation from '../../lotties/Callanimation'
import { NavLink } from 'react-router-dom'
import Aboutheadermodal from './Aboutheadermodal'

export default function Aboutheader() {

    return (
        <div className='abt-header'>
            <div className='abt-header-content-pill' id="myHeader">
                <div className="abt-header-logo">
                    <a href="http://"><img src={ivanLogo} alt="Ivan the Dev logo" /></a>
                </div>

                <div className="abt-header-hamburger-menu">
                    <Aboutheadermodal />
                </div>

                <div className="abt-header-main-menu">
                    <nav id='abt-header-main-nav'>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                    </nav>
                </div>

                <div className="abt-header-cta-button">
                    <a href="tel:">
                        <div className="abt-header-cta-button-link">
                            <h4>Call me</h4>
                            <Callanimation />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import '../../componentstyles/HomeComponentStyles/Header.css'
import ivanLogo from '../../assets/images/ivan-the-dev-logo-header.svg'
import Headermodal from './Headermodal'
import Callanimation from '../../lotties/Callanimation'
import { NavLink } from 'react-router-dom'



export default function Header() {



    return (
        <div className='header'>
            <div className='header-content-pill' id="myHeader">
                <div className="header-logo">
                    <a href="http://"><img src={ivanLogo} alt="Ivan the Dev logo" /></a>
                </div>

                <div className="header-hamburger-menu">
                    <Headermodal />
                </div>

                <div className="header-main-menu">
                    <nav id='header-main-nav'>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                    </nav>
                </div>

                <div className="header-cta-button">
                    <a href="tel:">
                        <div className="header-cta-button-link">
                            <h4>Call me</h4>
                            <Callanimation />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import '../../componentstyles/HomeComponentStyles/Header.css'
import ivanLogo from '../../assets/images/ivan-the-dev-logo-header.png'
import Headermodal from './Headermodal'


export default function Header() {

    /*const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        // Set the header to sticky if the scroll position is greater than a certain value
        setSticky(window.scrollY > 10);
    };

    // Effect hook to add/remove scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);*/



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
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="about">About</a></li>
                    </ul>
                </div>

                <div className="header-cta-button">
                    <a href="tel:">
                        <div className="header-cta-button-link">
                            Call me
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

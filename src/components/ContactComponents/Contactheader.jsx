import React from 'react'
import '../../componentstyles/ContactComponentStyles/Contactheader.css'
import ivanLogo from '../../assets/images/ivan-the-dev-logo-header.svg'
import Callanimation from '../../lotties/Callanimation'
import { NavLink } from 'react-router-dom'
import Headermodal from './Contactheadermodal'



export default function Contactheader() {



    return (
        <div className='contact-header'>
            <div className='contact-header-content-pill' id="myHeader">
                <div className="contact-header-logo">
                    <a href="http://"><img src={ivanLogo} alt="Ivan the Dev logo" /></a>
                </div>

                <div className="contact-header-hamburger-menu">
                    <Headermodal />
                </div>

            </div>
        </div>
    )
}

import React from 'react'
import '../../componentstyles/ContactComponentStyles/Contactheader.css'
import ivanLogo from '../../assets/images/ivan-the-dev-logo-header.svg'
import Headermodal from './Contactheadermodal'



export default function Contactheader() {



    return (
        <div className='contact-header'>
            <div className='contact-header-content-pill' id="myHeader">
                <div className="contact-header-logo">
                    <a href="https://ivanthedev.pro"><img src={ivanLogo} alt="Ivan the Dev logo" /></a>
                </div>

                <div className="contact-header-hamburger-menu">
                    <Headermodal />
                </div>

            </div>
        </div>
    )
}

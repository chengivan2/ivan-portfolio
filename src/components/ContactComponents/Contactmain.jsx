import React from 'react'
import Contactheader from './Contactheader'
import Contactcontact from './Contactcontact'
import '../../componentstyles/ContactComponentStyles/Contactmain.css'

export default function Contactmain() {
  return (
    <div className='contact-content'>
      <div className="contact-overlay"></div>

      <div className="contact-content-hook">
        <Contactheader />
        <div className="contact-content-hook-text">
          <div className="contact-content-hook-context">
          <h4>PRO SERVICES</h4>
          </div>
          <div className="contact-content-hook-text-title">
            <h2>
              Let's <span>Grow</span> Together.
            </h2>
          </div>

          <div className="contact-content-hook-text-paragraph">
              <p>
                I am Ivan. A full-stack web developer.
              </p>
            </div>

        </div>

      </div>

      <div className="contact-content-form">
        < Contactcontact />
      </div>

    </div>
  )
}

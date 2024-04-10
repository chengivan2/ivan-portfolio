import React from 'react'
import { InstagramLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import ivanthedevlogoSVG from '../../assets/images/ivan-the-dev-logo-footer.png'
import '../../componentstyles/HomeComponentStyles/Footer.css'

export default function Footer() {
  return (
    <div className='footer-section'>
      <div className="footer-items">

        <div className="footer-items-brand">

          <div className="ivan-the-dev-logo">
            <img src={ivanthedevlogoSVG} alt="Ivan the Dev logo" />
            <div className="active-state">
              <div className="active-circle"></div>
              <p className='active-text'>
                Available for 
                <span className='hire-text-glow'>
                   
                  <a href="mailto:ivan@ivanthedev.guru" title='Email me'> Hire</a>
                </span>
              </p>
            </div>

          </div>

          <div className="footer-social-media-icons">
            <a target="_blank" href="https://instagram.com/ivanthedev">
              <div className="footer-instagram-icon">
                <InstagramLogoIcon />
              </div>
            </a>

            {/*<div className="footer-x-icon">
                    <TwitterLogoIcon />
                  </div>*/}

            <a target="_blank" href="https://github.com/chengivan2">
              <div className="footer-github-icon">
                <GitHubLogoIcon />
              </div>
            </a>

            <a target="_blank" href="https://linkedin.com/in/chengoleivan">
              <div className="footer-linkedin-icon">
                <LinkedInLogoIcon />
              </div>
            </a>

          </div>

        </div>

        <div className="footer-menu">

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>

        </div>

        <div className="footer-subscribe">

          <div className="footer-subscribe-title">
            <h3>Your personal Geek!</h3>
          </div>

          {/*<div className="footer-subscribe-subscription-form">
            <p>Subscribe below to catch all the highlight of my upcoming projects.</p>
                <Subscriptionform />
                </div>*/}

        </div>

      </div>

    </div>
  )
}

import React from 'react'
import { InstagramLogoIcon, TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import ivanthedevlogoSVG from "../assets/images/ivan-the-dev-logo-footer.png"
import '../componentstyles/Footer.css'

export default function Footer() {
  return (
    <div className='footer-section'>
      <div className="footer-items">

        <div className="footer-items-brand">

          <div className="ivan-the-dev-logo">
            <img src={ivanthedevlogoSVG} alt="Ivan the Dev logo" />

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
            <li><a href="http://">Home</a></li>
            <li><a href="http://">Projects</a></li>
            <li><a href="http://">Contact</a></li>
            <li><a href="http://">About</a></li>
          </ul>

        </div>

        <div className="subscribe">

        </div>

      </div>
    </div>
  )
}

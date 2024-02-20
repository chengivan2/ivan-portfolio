import React from 'react'
import { InstagramLogoIcon, TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import ivanthedevlogoSVG from "../assets/images/ivan-the-dev-logo-footer.svg"

export default function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className="footer-items">

            <div className="footer-items-brand">

                <div className="ivan-the-dev-logo">
                    <img src={ivanthedevlogoSVG} alt="Ivan the Dev logo" />

                </div>

                <div className="footer-social-media-icons">
                  <div className="footer-instagram-icon">
                    <InstagramLogoIcon />
                  </div>

                  <div className="footer-x-icon">
                    <TwitterLogoIcon />
                  </div>

                  <div className="footer-github-icon">
                    <GitHubLogoIcon />
                  </div>

                  <div className="footer-linkedin-icon">
                    <LinkedInLogoIcon />
                  </div>
                    
                </div>

            </div>

            <div className="footer-menu">

            </div>

            <div className="subscribe">

            </div>

        </div>
    </div>
  )
}

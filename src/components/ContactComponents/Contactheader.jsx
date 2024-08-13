import React from "react";
import "../../componentstyles/ContactComponentStyles/Contactheader.css";
import Headermodal from "./Contactheadermodal";

export default function Contactheader() {
  return (
    <div className="contact-header">
      <div className="contact-header-content-pill" id="myHeader">
        <div className="contact-header-logo">
          <a href="/">
            <img
              src="https://res.cloudinary.com/doqbnfais/image/upload/v1712724951/Ivan%20the%20Dev%20assets/images/ivan-the-dev-logo-header_bk51x2.svg"
              alt="Ivan the Dev logo"
            />
          </a>
        </div>

        <div className="contact-header-hamburger-menu">
          <Headermodal />
        </div>
      </div>
    </div>
  );
}

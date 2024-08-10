import React from "react";
import "../../componentstyles/ProjectsComponentStyles/Projectsheader.css";
import ivanLogo from "../../assets/images/ivan-the-dev-logo-header.svg";
import Callanimation from "../../lotties/Callanimation";
import { NavLink } from "react-router-dom";
import Projectsheadermodal from "./Projectsheadermodal";

export default function Projectsheader() {
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE;

  return (
    <div className="pr-header">
      <div className="pr-header-content-pill" id="myHeader">
        <div className="pr-header-logo">
          <a href="/">
            <img src={ivanLogo} alt="Ivan the Dev logo" />
          </a>
        </div>

        <div className="pr-header-hamburger-menu">
          <Projectsheadermodal />
        </div>

        <div className="pr-header-main-menu">
          <nav id="pr-header-main-nav">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </nav>
        </div>

        <div className="pr-header-cta-button">
          <a href={contactPhone} title="Call Ivan the Dev">
            <div className="pr-header-cta-button-link">
              <h4>Call Ivan the Dev</h4>
              <Callanimation />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

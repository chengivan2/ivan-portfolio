'use client'

import React from "react";
import "./HomeComponentStyles/Homeheader.css";
import Callanimation from "../public/lotties/Callanimation";
import { NavLink } from "react-router-dom";
import Homeheadermodal from "./Homeheadermodal";

export default function Homeheader() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;

  return (
    <div className="home-header">
      <div className="home-header-content-pill" id="myHeader">
        <div className="home-header-logo">
          <a href="/">
            <img
              src="https://res.cloudinary.com/doqbnfais/image/upload/v1712724951/Ivan%20the%20Dev%20assets/images/ivan-the-dev-logo-header_bk51x2.svg"
              alt="Ivan the Dev logo"
            />
          </a>
        </div>

        <div className="home-header-hamburger-menu">
          <Homeheadermodal />
        </div>

        <div className="home-header-main-menu">
          <nav id="home-header-main-nav">
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

        <div className="home-header-cta-button">
          <a href={contactPhone} title="Call Ivan the Dev">
            <div className="home-header-cta-button-link">
              <h4>Call Ivan the Dev</h4>
              <Callanimation />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

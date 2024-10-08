import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "../../componentstyles/HomeComponentStyles/Homeheadermodal.css";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Callanimation from "../../lotties/Callanimation";
import { NavLink } from "react-router-dom";

const contactPhone = import.meta.env.VITE_CONTACT_PHONE;

const Homeheadermodal = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <div className="home-header-modal-menu-button">
        <HamburgerMenuIcon />
      </div>
    </AlertDialog.Trigger>

    <AlertDialog.Portal>
      <AlertDialog.Overlay className="home-AlertDialogOverlay" />

      <AlertDialog.Content className="home-AlertDialogContent">
        <AlertDialog.Description className="home-AlertDialogDescription">
          <div className="logo-and-close">
            <div
              className="home-AlertDialogCancel"
              style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}
            >
              <AlertDialog.Cancel asChild>
                <Cross2Icon />
              </AlertDialog.Cancel>
            </div>
          </div>

          <div className="home-header-modal-menu">
            <nav id="home-header-modal-main-nav">
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

          <div className="home-header-modal-cta-button">
            <a href={contactPhone} title="Call Ivan the Dev">
              <div className="home-header-modal-cta-button-link">
                Call Ivan the Dev
                <Callanimation />
              </div>
            </a>
          </div>
        </AlertDialog.Description>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default Homeheadermodal;

import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import '../../componentstyles/ContactComponentStyles/Contactheadermodal.css'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Callanimation from '../../lotties/Callanimation';
import { NavLink } from 'react-router-dom';


const Contactheadermodal = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <div className="contact-header-modal-menu-button">
                <HamburgerMenuIcon />
            </div>

        </AlertDialog.Trigger>

        <AlertDialog.Portal>

            <AlertDialog.Overlay className="cc-AlertDialogOverlay" />

            <AlertDialog.Content className="cc-AlertDialogContent">

                <AlertDialog.Description className="cc-AlertDialogDescription">
                    <div className="logo-and-close">
                        <div className='cc-AlertDialogCancel' style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                            <AlertDialog.Cancel asChild>
                                <Cross2Icon />
                            </AlertDialog.Cancel>
                        </div>
                    </div>

                    <div className="contact-header-modal-menu">

                        <nav id='contact-header-modal-main-nav'>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                        </nav>

                    </div>

                    <div className="contact-header-modal-cta-button">
                        <a href="tel:254712551324">
                            <div className="contact-header-modal-cta-button-link">
                                Call me
                                <Callanimation />
                            </div>
                        </a>
                    </div>

                </AlertDialog.Description>

            </AlertDialog.Content>

        </AlertDialog.Portal>

    </AlertDialog.Root>
);

export default Contactheadermodal;
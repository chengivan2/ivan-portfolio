import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import '../../componentstyles/AboutComponentStyles/Aboutheadermodal.css'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Callanimation from '../../lotties/Callanimation';
import { NavLink } from 'react-router-dom';


const Aboutheadermodal = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <div className="abt-header-modal-menu-button">
                <HamburgerMenuIcon />
            </div>

        </AlertDialog.Trigger>

        <AlertDialog.Portal>

            <AlertDialog.Overlay className="abt-AlertDialogOverlay" />

            <AlertDialog.Content className="abt-AlertDialogContent">

                <AlertDialog.Description className="abt-AlertDialogDescription">
                    <div className="logo-and-close">
                        <div className='abt-AlertDialogCancel' style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                            <AlertDialog.Cancel asChild>
                                <Cross2Icon />
                            </AlertDialog.Cancel>
                        </div>
                    </div>

                    <div className="abt-header-modal-menu">

                        <nav id='abt-header-modal-main-nav'>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                        </nav>

                    </div>

                    <div className="abt-header-modal-cta-button">
                        <a href="tel:254712551324">
                            <div className="abt-header-modal-cta-button-link">
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

export default Aboutheadermodal;
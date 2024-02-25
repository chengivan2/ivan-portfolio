import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import '../../componentstyles/ProjectsComponentStyles/Projectsheadermodal.css'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Callanimation from '../../lotties/Callanimation';
import { NavLink } from 'react-router-dom';


const Projectsheadermodal = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <div className="pr-header-modal-menu-button">
                <HamburgerMenuIcon />
            </div>

        </AlertDialog.Trigger>

        <AlertDialog.Portal>

            <AlertDialog.Overlay className="pr-AlertDialogOverlay" />

            <AlertDialog.Content className="pr-AlertDialogContent">

                <AlertDialog.Description className="pr-AlertDialogDescription">
                    <div className="logo-and-close">
                        <div className='pr-AlertDialogCancel' style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                            <AlertDialog.Cancel asChild>
                                <Cross2Icon />
                            </AlertDialog.Cancel>
                        </div>
                    </div>

                    <div className="pr-header-modal-menu">

                        <nav id='pr-header-modal-main-nav'>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
                        </nav>

                    </div>

                    <div className="pr-header-modal-cta-button">
                        <a href="">
                            <div className="pr-header-modal-cta-button-link">
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

export default Projectsheadermodal;
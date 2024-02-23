import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import '../../componentstyles/HomeComponentStyles/Headermodal.css'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'


const Headermodal = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <div className="header-menu-button">
                <HamburgerMenuIcon />
            </div>

        </AlertDialog.Trigger>

        <AlertDialog.Portal>

            <AlertDialog.Overlay className="AlertDialogOverlay" />

            <AlertDialog.Content className="AlertDialogContent">

                <AlertDialog.Description className="AlertDialogDescription">
                    <div className="logo-and-close">
                        <div className='AlertDialogCancel' style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                            <AlertDialog.Cancel asChild>
                                <Cross2Icon />
                            </AlertDialog.Cancel>
                        </div>
                    </div>

                    <div className="header-modal-menu">

                        <ul>
                            <li><a href="http://">Home</a></li>
                            <li><a href="http://">Projects</a></li>
                            <li><a href="http://">Contact</a></li>
                            <li><a href="http://">About</a></li>
                        </ul>

                    </div>

                    <div className="header-modal-cta-button">
                        <a href="">
                            <div className="header-modal-cta-button-link">
                                Get Started
                            </div>
                        </a>
                    </div>

                </AlertDialog.Description>

            </AlertDialog.Content>

        </AlertDialog.Portal>

    </AlertDialog.Root>
);

export default Headermodal;
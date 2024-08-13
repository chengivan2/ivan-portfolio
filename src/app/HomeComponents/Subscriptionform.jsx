'use client'

import React, { useState, useRef } from 'react';
import * as Form from '@radix-ui/react-form';
import './HomeComponentStyles/Subscriptionform.css'

export default function Subscriptionform() {
    const [formData, setFormData] = useState({
        firstname: '',
        useremail: '',
        usermessage: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    };

    return (
        <>
            <Form.Root className="ft-FormRoot" ref={form} onSubmit={sendEmail}>

                <Form.Field className="ft-FormField" name="firstname">
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                        <Form.Label className="ft-FormLabel poppins-regular">First Name</Form.Label>
                        <Form.Message className="ft-FormMessage poppins-regular" match="valueMissing">
                            Please enter your name
                        </Form.Message>
                        <Form.Message className="ft-FormMessage poppins-regular" match="typeMismatch">
                            Please enter valid text
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input className="ft-Input" placeholder="First name" type="text" value={formData.firstname}
                            onChange={handleChange} required />
                    </Form.Control>
                </Form.Field>


                <Form.Field className="ft-FormField" name="useremail">
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                        <Form.Label className="ft-FormLabel poppins-regular">Email</Form.Label>
                        <Form.Message className="ft-FormMessage poppins-regular" match="valueMissing">
                            Please enter your email
                        </Form.Message>
                        <Form.Message className="ft-FormMessage poppins-regular" match="typeMismatch">
                            Please provide a valid email
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input className="ft-Input" placeholder='Email address' type="email" value={formData.useremail}
                            onChange={handleChange} required />
                    </Form.Control>
                </Form.Field>
                <Form.Submit asChild>

                    <button className="ft-Button poppins-regular" style={{ marginTop: 10 }}>
                        Subscribe
                    </button>

                </Form.Submit>
            </Form.Root>
        </>
    )
}
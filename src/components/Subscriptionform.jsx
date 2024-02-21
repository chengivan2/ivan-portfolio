import React, { useState, useRef } from 'react';
import * as Form from '@radix-ui/react-form';
import '../componentstyles/Subscriptionform.css';

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
            <Form.Root className="FormRoot" ref={form} onSubmit={sendEmail}>

                <Form.Field className="FormField" name="firstname">
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                        <Form.Label className="FormLabel poppins-regular">First Name</Form.Label>
                        <Form.Message className="FormMessage poppins-regular" match="valueMissing">
                            Please enter your name
                        </Form.Message>
                        <Form.Message className="FormMessage poppins-regular" match="typeMismatch">
                            Please enter valid text
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input className="Input" placeholder="First name" type="text" value={formData.firstname}
                            onChange={handleChange} required />
                    </Form.Control>
                </Form.Field>


                <Form.Field className="FormField" name="useremail">
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                        <Form.Label className="FormLabel poppins-regular">Email</Form.Label>
                        <Form.Message className="FormMessage poppins-regular" match="valueMissing">
                            Please enter your email
                        </Form.Message>
                        <Form.Message className="FormMessage poppins-regular" match="typeMismatch">
                            Please provide a valid email
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input className="Input" placeholder='Email address' type="email" value={formData.useremail}
                            onChange={handleChange} required />
                    </Form.Control>
                </Form.Field>
                <Form.Submit asChild>

                    <button className="Button poppins-regular" style={{ marginTop: 10 }}>
                        Subscribe
                    </button>

                </Form.Submit>
            </Form.Root>
        </>
    )
}
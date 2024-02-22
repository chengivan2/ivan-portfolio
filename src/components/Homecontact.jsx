import React, { useState, useRef } from 'react';
import * as Form from '@radix-ui/react-form';
import emailjs from '@emailjs/browser';
import Successmessage from './Successmessage';
import '../componentstyles/Homecontact.css'

export default function Homecontact() {
  const [formData, setFormData] = useState({
    firstname: '',
    useremail: '',
    usermessage: ''
  });

  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
        })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowForm(false); // Hide the form
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-section'>
      {showForm ?
        (<Form.Root className="hc-FormRoot" ref={form} onSubmit={sendEmail}>

          <Form.Field className="hc-FormField" name="firstname">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="hc-FormLabel poppins-regular">First Name</Form.Label>
              <Form.Message className="hc-FormMessage poppins-regular" match="valueMissing">
                Please enter your name
              </Form.Message>
              <Form.Message className="hc-FormMessage poppins-regular" match="typeMismatch">
                Please enter valid text
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="hc-Input" type="text" value={formData.firstname}
                onChange={handleChange} required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="hc-FormField" name="useremail">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="hc-FormLabel poppins-regular">Email</Form.Label>
              <Form.Message className="hc-FormMessage poppins-regular" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="hc-FormMessage poppins-regular" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="hc-Input" type="email" value={formData.useremail}
                onChange={handleChange} required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="hc-FormField" name="usermessage">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="hc-FormLabel poppins-regular">Message</Form.Label>
              <Form.Message className="hc-FormMessage poppins-regular" match="valueMissing">
                Please enter a message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea className="hc-Textarea poppins-regular" value={formData.usermessage}
                onChange={handleChange} required />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>

            <button className="hc-Button-success poppins-regular" style={{ marginTop: 10 }}>
              Send
            </button>

          </Form.Submit>
        </Form.Root>) : 
        (<Successmessage />)
      }
    </div>
  )
}
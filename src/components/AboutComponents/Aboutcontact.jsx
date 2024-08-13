import React, { useState, useRef } from 'react';
import * as Form from '@radix-ui/react-form';
import emailjs from '@emailjs/browser';
import Successmessage from './Successmessage';
import '../../componentstyles/AboutComponentStyles/Aboutcontact.css'
import Homecontactloading from '../../lotties/Homecontactloading';
import Scrollanimation from '../../lotties/Scrollanimation';

export default function Aboutcontact() {
  const [formData, setFormData] = useState({
    firstname: '',
    useremail: '',
    usermessage: '',
    userphone:''
  });

  const [showForm, setShowForm] = useState(true);

  const [showLoad, setShowLoad] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuccessClose = () => {
    setShowForm(true);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowLoad(true);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        })
      .then(
        () => {
          setShowLoad(false) //Hide loading animation
          setShowForm(false); // Hide the form
          setFormData({
            firstname: '',
            useremail: '',
            usermessage: '',
            userphone: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='abt-contact-section'>
      <div className="abt-overlay"></div>
      <div className="abt-contact-section-hook">
        <h2 className="abt-contact-section-hook-title">
          Let's get in touch
        </h2>
      </div>

      <Scrollanimation />

      {showForm ?
        (<Form.Root id='homecontactform' className="abt-FormRoot" ref={form} onSubmit={sendEmail}>

          <Form.Field className="abt-FormField" name="firstname">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="abt-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="abt-FormMessage poppins-regular" match="valueMissing">
                Please enter your name
              </Form.Message>
              <Form.Message className="abt-FormMessage poppins-regular" match="typeMismatch">
                Please enter valid text
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="abt-Input" type="text" value={formData.firstname}
                onChange={handleChange} placeholder='Enter your name' required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="abt-FormField" name="useremail">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="abt-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="abt-FormMessage poppins-regular" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="abt-FormMessage poppins-regular" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="abt-Input" type="email" value={formData.useremail}
                onChange={handleChange} required placeholder='Enter your email' />
            </Form.Control>
          </Form.Field>

          <Form.Field className="abt-FormField" name="userphone">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="abt-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="abt-FormMessage poppins-regular" match="valueMissing">
                Please enter your your phone number
              </Form.Message>
              <Form.Message className="abt-FormMessage poppins-regular" match="typeMismatch">
                Please provide a valid phone number
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="abt-Input" type="tel" value={formData.userphone}
                onChange={handleChange} placeholder='Enter your Phone No.' required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="abt-FormField" name="usermessage">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="abt-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="abt-FormMessage poppins-regular" match="valueMissing">
                Please enter a message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea className="abt-Textarea poppins-regular" value={formData.usermessage}
                onChange={handleChange} placeholder='You can tell me anything' required />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>

            <button className="abt-Button-success poppins-regular" style={{ marginTop: 10 }}>
              {showLoad ? <Homecontactloading /> : "Send"}
            </button>

          </Form.Submit>
        </Form.Root>) : 
        (<Successmessage onClick={handleSuccessClose} />)
      }
    </div>
  )
}
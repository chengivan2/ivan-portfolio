import React, { useState, useRef } from 'react';
import * as Form from '@radix-ui/react-form';
import emailjs from '@emailjs/browser';
import Successmessage from './Successmessage';
import '../../componentstyles/HomeComponentStyles/Homecontact.css'
import Homecontactloading from '../../lotties/Homecontactloading';
import Scrollanimation from '../../lotties/Scrollanimation';

export default function Homecontact() {
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
      .sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
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
    <div className='hc-contact-section'>
      <div className="hc-overlay"></div>
      <div className="hc-contact-section-hook">
        <h2 className="hc-contact-section-hook-title">
          Let's get in touch
        </h2>

        <p className="contact-section-hook-paragraph">
          Let's talk so I can tell you what you need to hear.
          Let's Build the Future <span>Together</span>! 🚀 
          Whether you're seeking a dynamic web presence, 
          innovative solutions, or just want to chat tech, 
          I'm all ears. As a <span>full-stack developer</span>, 
          I thrive on crafting seamless experiences from front-end design to back-end systems. 
          <span>Reach out</span>, and let's turn your ideas into digital reality. 🌐✨

        </p>
      </div>

      <Scrollanimation />

      {showForm ?
        (<Form.Root id='homecontactform' className="hc-FormRoot" ref={form} onSubmit={sendEmail}>

          <Form.Field className="hc-FormField" name="firstname">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="hc-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="hc-FormMessage poppins-regular" match="valueMissing">
                Please enter your name
              </Form.Message>
              <Form.Message className="hc-FormMessage poppins-regular" match="typeMismatch">
                Please enter valid text
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="hc-Input" type="text" value={formData.firstname}
                onChange={handleChange} placeholder='Enter your name' required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="hc-FormField" name="useremail">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="hc-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="hc-FormMessage poppins-regular" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="hc-FormMessage poppins-regular" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="hc-Input" type="email" value={formData.useremail}
                onChange={handleChange} required placeholder='Enter your email' />
            </Form.Control>
          </Form.Field>

          <Form.Field className="hc-FormField" name="userphone">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="hc-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="hc-FormMessage poppins-regular" match="valueMissing">
                Please enter your your phone number
              </Form.Message>
              <Form.Message className="hc-FormMessage poppins-regular" match="typeMismatch">
                Please provide a valid phone number
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="hc-Input" type="tel" value={formData.userphone}
                onChange={handleChange} placeholder='Enter your Phone No.' required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="hc-FormField" name="usermessage">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="hc-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="hc-FormMessage poppins-regular" match="valueMissing">
                Please enter a message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea className="hc-Textarea poppins-regular" value={formData.usermessage}
                onChange={handleChange} placeholder='You can tell me anything' required />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>

            <button className="hc-Button-success poppins-regular" style={{ marginTop: 10 }}>
              {showLoad ? <Homecontactloading /> : "Send"}
            </button>

          </Form.Submit>
        </Form.Root>) : 
        (<Successmessage onClick={handleSuccessClose} />)
      }
    </div>
  )
}
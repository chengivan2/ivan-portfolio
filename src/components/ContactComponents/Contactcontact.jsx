import React, { useState, useRef } from 'react';
import * as Form from '@radix-ui/react-form';
import emailjs from '@emailjs/browser';
import Successmessage from './Successmessage';
import '../../componentstyles/ContactComponentStyles/Contactcontact.css'
import Homecontactloading from '../../lotties/Homecontactloading';

export default function Contactcontact() {
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
    <>

      {showForm ?
        (<Form.Root id='homecontactform' className="cc-FormRoot" ref={form} onSubmit={sendEmail}>

          <Form.Field className="cc-FormField" name="firstname">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="cc-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="cc-FormMessage poppins-regular" match="valueMissing">
                Please enter your name
              </Form.Message>
              <Form.Message className="cc-FormMessage poppins-regular" match="typeMismatch">
                Please enter valid text
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="cc-Input" type="text" value={formData.firstname}
                onChange={handleChange} placeholder='Enter your name' required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="cc-FormField" name="useremail">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="cc-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="cc-FormMessage poppins-regular" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="cc-FormMessage poppins-regular" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="cc-Input" type="email" value={formData.useremail}
                onChange={handleChange} required placeholder='Enter your email' />
            </Form.Control>
          </Form.Field>

          <Form.Field className="cc-FormField" name="userphone">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="cc-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="cc-FormMessage poppins-regular" match="valueMissing">
                Please enter your your phone number
              </Form.Message>
              <Form.Message className="cc-FormMessage poppins-regular" match="typeMismatch">
                Please provide a valid phone number
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="cc-Input" type="tel" value={formData.userphone}
                onChange={handleChange} placeholder='Enter your Phone No.' required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="cc-FormField" name="usermessage">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Form.Label className="cc-FormLabel poppins-regular"></Form.Label>
              <Form.Message className="cc-FormMessage poppins-regular" match="valueMissing">
                Please enter a message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea className="cc-Textarea poppins-regular" value={formData.usermessage}
                onChange={handleChange} placeholder='You can tell me anything' required />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>

            <button className="cc-Button-success poppins-regular" style={{ marginTop: 10 }}>
              {showLoad ? <Homecontactloading /> : "Send"}
            </button>

          </Form.Submit>
        </Form.Root>) : 
        (<Successmessage onClick={handleSuccessClose} />)
      }
    </>
  )
}
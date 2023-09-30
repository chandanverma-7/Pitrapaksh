import React, { useState } from 'react';
import './ContactUs.scss'
import { axiosClient } from '../../utils/axiosClient';

function ContactUs() {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`Name: ${name}\nPhone Number: ${phoneNumber}\nAddress: ${address}\nEmail: ${email}`);
    try {
      await axiosClient.post('/createUser/submit',{
      name,
      phoneNumber,
      address,
      email
     });
     
     // console.log('this is result',result);
     alert("Information submitted successfully")
   } catch (error) {
     console.log(error);
   }
  };

  return (
    <div className="contact">
      <h3 className="message">If you want to contact us for further details please fill this form.</h3>
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name" className="form-label">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />

      <label htmlFor="phone" className="form-label">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="form-input"
      />

      <label htmlFor="address" className="form-label">Address:</label>
      <textarea
        id="address"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="form-input"
      ></textarea>

      <label htmlFor="email" className="form-label">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
      />

      <button type="submit" className="form-button">Submit</button>
    </form>
    </div>
  )
}

export default ContactUs





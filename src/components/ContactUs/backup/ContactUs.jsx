import React, { useState, useRef } from "react";
import './contactUs.scss'

import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactUs = () => {
  const form = useRef();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i5ojejk', 'template_bcd2l9o', form.current, {
        publicKey: 'a2_ImbZJ0i_XADfRS',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setShowSuccessDialog(true);
          // Reset the form after successful submission
          form.current.reset();
          // Automatically close success message after 3 seconds (adjust time as needed)
          setTimeout(() => {
            closeSuccessDialog();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeSuccessDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <div className="mainContactUs">
      <div className="container contactUs">
        <div className="contactForm">
          <div className="styledContactForm">
            <h1>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
        <hr />
        <div className="location">
          <h3>Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30157.43913937931!2d72.863172!3d19.121694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c825839d81ad%3A0x727914f952af4dda!2sMicropoint%20Computers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1710486685674!5m2!1sen!2sin"
            width="100%"
            height="404px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {showSuccessDialog && (
        <div className="successDialog">
          <p>Email is sent successfully</p>
          <button onClick={closeSuccessDialog}>Close</button>
        </div>
      )}
    </div>
  )
}

export default ContactUs;

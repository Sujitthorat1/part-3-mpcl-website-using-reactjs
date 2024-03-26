import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import styled from "styled-components";

import './contact.scss'
const Contact = () => {
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
        <div className='contactContainer container'>
            <div className="box">
                <div>
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

                {showSuccessDialog && (
                    <div>
                        <p>Email is sent successfully</p>
                        <button onClick={closeSuccessDialog}>Close</button>
                    </div>
                )}

            </div>
            <div className="box">
                <div>
                    <h1>Contact Us</h1>

                </div>

                {showSuccessDialog && (
                    <div>
                        <p>Email is sent successfully</p>
                        <button onClick={closeSuccessDialog}>Close</button>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Contact

// Style


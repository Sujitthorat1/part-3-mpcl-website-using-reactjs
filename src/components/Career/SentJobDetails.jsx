import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import styled from "styled-components";

const SentJobDetails = () => {
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
                    <StyledContactForm>
                        <h2>Career with  Micropoint Computers</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </StyledContactForm>
                </div>
            </div>

            {showSuccessDialog && (
                <SuccessDialog>
                    <p>Email is sent successfully</p>
                    <button onClick={closeSuccessDialog}>Close</button>
                </SuccessDialog>
            )}
        </div>
    )
}

export default SentJobDetails;

// Style

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

const SuccessDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

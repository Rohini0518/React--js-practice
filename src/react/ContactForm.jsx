import React, { useState } from 'react';
import './styles.css'

function ContactForm() {
    const [error,setError] =useState("")
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const uname = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (!uname) {
            setError("Name is required");
            return;
        }

        if (!email) {
            setError("Email is required");
            return;
        }

        if (!email.includes("@")) {
            setError("Invalid email format");
            return;
        }

        if (!message) {
            setError("Message is required");
            return;
        }

        setError(`Thank you, ${uname}`);
    };
    return (
        <div>
            {/* Implement contact form logic here */}
            <form onSubmit={handleSubmit}>
            <div >
                <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"   placeholder="Enter Name"  /></div>
                    <div>
                    <label htmlFor="email">Email: </label>
          <input type="text" name="email" placeholder="Enter Email" id="email" />
                </div>
                <div>
                <label htmlFor="message">Message: </label>
                    <input type="text" name="message" id="message"   placeholder="Enter message"  />
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>{error}</p>
        </div>
    );
}

export default ContactForm;
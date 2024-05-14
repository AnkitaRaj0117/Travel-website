import './ContactForm.css'
import React from 'react';

function ContactForm() {
    return (
        <div className="form-container">
            <h1>Send a message to Us!</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Write a message"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;
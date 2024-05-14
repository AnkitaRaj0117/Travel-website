import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";

function Contact() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Contact Us"
            />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;
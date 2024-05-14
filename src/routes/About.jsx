import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";

function About() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="About Us"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;
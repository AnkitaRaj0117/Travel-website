import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Trip from '../component/Trip';

function Service() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1675251978349-cd73ece6ab72?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Services"
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Service;
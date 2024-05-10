import Destination from "../component/Destination";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Trip from "../component/Trip";
import Footer from "../component/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero cName="hero"
                heroImg="https://images.unsplash.com/photo-1614088459293-5669fadc3448?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Your Journey Your Story"
                text="Choose your favourite destination"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    );
}

export default Home; 
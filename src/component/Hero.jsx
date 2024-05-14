import "./Hero.css";
import React from "react";

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="HeroImg" src={props.heroImg} className="homeImg" />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <div>
                        <input className="searchBar" type="search" placeholder="Search your favourite destination" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero;
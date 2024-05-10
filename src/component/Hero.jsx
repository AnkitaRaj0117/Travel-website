import "./Hero.css";

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="HeroImg" src={props.heroImg} className="homeImg" />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <input className="searchBar" type="search" placeholder="Search your favourite destination" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
            </div>
        </>
    );
}
export default Hero;
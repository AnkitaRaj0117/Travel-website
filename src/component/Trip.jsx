import "./Trip.css"
import TripData from "./TripData";
import trip1 from "../assets/6.jpg"
import trip2 from "../assets/7.jpg"
import trip3 from "../assets/8.jpg"

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover best destination for your vacation here..</p>
            <div className="tripCard">
                <TripData image={trip1}
                    heading="Trip to Odisha"
                    para="On the beach in Odisha from sunrise to sunset feel like The Little Prince sitting here, watching the sunset from the beach on the Bay of Bengal in Odisha; and tomorrow morning I will be able to see the sunrise from the same beach. It’s a strange twist of geography that you can see the sun rise and set on the same beach in Odisha." />
                <TripData image={trip2}
                    heading="Trip to Banaras"
                    para="On the beach in Odisha from sunrise to sunset feel like The Little Prince sitting here, watching the sunset from the beach on the Bay of Bengal in Odisha; and tomorrow morning I will be able to see the sunrise from the same beach. It’s a strange twist of geography that you can see the sun rise and set on the same beach in Odisha." />
                <TripData image={trip3}
                    heading="Trip to Rajasthan"
                    para="On the beach in Odisha from sunrise to sunset feel like The Little Prince sitting here, watching the sunset from the beach on the Bay of Bengal in Odisha; and tomorrow morning I will be able to see the sunrise from the same beach. It’s a strange twist of geography that you can see the sun rise and set on the same beach in Odisha." />
            </div>
        </div>
    )
}

export default Trip;
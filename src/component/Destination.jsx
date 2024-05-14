import React from "react"
import "./Destination.css"
import temple1 from "../assets/1.jpg"
import temple2 from "../assets/2.jpg"
import temple3 from "../assets/3.jpg"
import temple4 from "../assets/4.jpg"
import DestinationData from "./DestinationData"

function Destination() {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tour give you opportunity to explore</p>
            <DestinationData
                className="first-desc"
                heading="Temple of Ayodhya"
                para="The Ram Mandir  lit. 'Rama Temple' is a Hindu temple complex in Ayodhya, Uttar Pradesh, India. Many Hindus believe that it is located at the site of Ram Janmabhoomi, the mythical birthplace of Rama, a principal deity of Hinduism. Ayodhya was historically known as Saketa. The early Buddhist and Jain canonical textsmention that the religious leaders Gautama Buddha and Mahavira visited and lived inthe city. The Jain texts also describe it as the birthplace of five tirthankarasnamely, Rishabhanatha, Ajitanatha, Abhinandananatha, Sumatinatha and Anantanatha, andassociate it with the legendary Bharata Chakravarti. From the Gupta period onwards,several sources mention Ayodhya and Saketa as the name of the same city."
                img1={temple1}
                img2={temple2}
            />
            <DestinationData
                className="first-desc-reverse"
                heading="Temple of Badrinath"
                para="Badrinath Temple is located in a small town Badrinath which is in Chamoli district of Uttarakhand. The temple is dedicated to Lord Vishnu and boasts high religious significance. With Alaknanda River flowing by the side and a backdrop full of snow clad mountains Badrinath Temple is an absolute visual treat. It is one of the most revered pilgrimage sites of “Char Dham” (four abodes) which in turn is the most scared set of pilgrimage sites in Hindu religion. Every year thousands and thousands of disciples visit this temple. Located at the height of 3133 meters above the sea level Badrinath Temple is not easy to reach. One has to drive through hilly terrains with dangerous cliffs and curves to reach the temple. But this doesn’t deter disciples from pouring in every year in large numbers."
                img1={temple3}
                img2={temple4}
            />
        </div>
    )
}

export default Destination;
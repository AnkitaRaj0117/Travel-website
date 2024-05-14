import React from "react";
function DestinationData(props) {
    return (
        <div className={props.className}>
            <div className="text-desc">
                <h2>{props.heading}</h2>
                <p>{props.para}</p>
            </div>
            <div className="image">
                <img alt="img" src={props.img1} />
                <img alt="img" src={props.img2} />
            </div>
        </div>
    )
}

export default DestinationData;
import React from "react";

export default function Card(props){
    let batchText 
if(props.elem.openSpots===0){
    batchText="Sold out"
}
else if(props.elem.location==="Online"){
    batchText = "Online"
}   


    return(
        <div className="card">
            <div className="card__badge">{batchText}</div>
            {/* <div className="card__badge" style={{display: props.openSpots===0 ? "block":"none"}}>Sold out</div> */}
            <img className="card__img" src={`./images/${props.elem.coverImg}`} alt="/"/>
            <div className="card__stats">
                <img className="card__stats-star" src="./images/star.webp" alt="star"/>
                <span className="card__stats-rating">{props.elem.stats.rating}</span>
                <span>({props.elem.stats.reviewCount}) • </span>
                <span>{props.elem.location}</span>
            </div>
            <p className="card__title">{props.elem.title}</p>
            <p className="card__price"><strong>From ${props.elem.price}</strong> / person</p>
                        
        </div>
    )
}
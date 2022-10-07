import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./data";
import Card from "./components/Card";
console.log(data)

export default function App(){
    const cardData = data.map(elem => {
        return <Card 
            key={elem.id}
            elem={elem}/>
            // title={elem.title} 
            // description={elem.description} 
            // coverImg ={elem.coverImg} 
            // stats={elem.stats} 
            // price={elem.price}  
            // location={elem.location} 
            // openSpots={elem.openSpots}/>
    })

    return(
        <div className="container">
            <Navbar />
            <Hero />
            <section className="card-container">
                {cardData}
            </section>
            
        </div>
    )
}
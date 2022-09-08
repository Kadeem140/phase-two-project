import React, {useEffect, useState} from 'react';
const axios = require("axios");


//Hero Card Blueprint
//Add to team Button that adds to a team mock DB

export default function HeroCard ({ heroCard }){
     console.log(heroCard, "Response Data fro Hero card")

     function postHeroData(hero){
        // Event.preventDefault();
        console.log('POST DATA HERO HERE',hero)
        fetch(`http://localhost:3000/heroes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hero)
        })
        .then(response => response.text())
        .then(data => { 
            console.log("Success:", data)
        })
        .catch((error) => {
            console.log('Error:', error)
          });
      }
   
    return(  
            <div className="card">
                <div className="cardBody">
                    <h3>PUBLISHER: {heroCard.team}</h3>
                    <h1>NAME: {heroCard.superHeroName}</h1>
                    <img src={heroCard.image} alt="card"/>
                    <p>ALLIANCE: {heroCard.alliance}</p>
                    <p>RACE: {heroCard.race}</p>
                    <p>WEIGHT: {heroCard.weight}</p>
                    <p>HEIGHT: {heroCard.height}</p>
                    <p>"Civilian Name: "{heroCard.civilianName}</p>
                    <p>Hero ID: {heroCard.Id}</p>
                    <ul>PowerStats:
                        <li>COMBAT: {heroCard.powerStats.combat}</li>
                        <li>DURABILTIY: {heroCard.powerStats.durability}</li>
                        <li>INTELLIGENCE: {heroCard.powerStats.intelligence}</li>
                        <li>POWER: {heroCard.powerStats.power}</li>
                        <li>SPEED: {heroCard.powerStats.speed}</li>
                        <li>STRENGTH: {heroCard.powerStats.strength}</li>
                    </ul> 
                    <button onClick={postHeroData(heroCard)}>Add to Team</button>
                </div>
            </div>
    )
}
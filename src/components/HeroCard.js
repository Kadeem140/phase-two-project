import React, {useEffect, useState} from 'react';
const axios = require("axios");


//Hero Card Blueprint
//Add to team Button that adds to a team mock DB

export default function HeroCard ({ heroCard }){
     console.log(heroCard, "Response Data fro Hero card")

     function postHeroData(hero){
        Event.preventDefault();
        console.log('POST DATA HERO HERE',hero)
        axios.request({
            url: `http://localhost:3000/heroes`, 
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
                    <h3>{heroCard.team}</h3>
                    <h1>{heroCard.superHeroName}</h1>
                    <img src={heroCard.image} alt="card"/>
                    <p>{heroCard.alliance}</p>
                    <p>{heroCard.race}</p>
                    <p>{heroCard.weight}</p>
                    <p>{heroCard.height}</p>
                    <p>"Civilian Name: "{heroCard.civilianName}</p>
                    <p>Hero ID: {heroCard.Id}</p>
                    <ul>PowerStats:
                        <li>{heroCard.powerStats.combat}</li>
                        <li>{heroCard.powerStats.durability}</li>
                        <li>{heroCard.powerStats.intelligence}</li>
                        <li>{heroCard.powerStats.power}</li>
                        <li>{heroCard.powerStats.speed}</li>
                        <li>{heroCard.powerStats.strength}</li>
                    </ul> 
                </div>
            </div>
    )
}
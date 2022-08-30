import React, {useEffect, useState} from 'react';


//Hero Card Blueprint
//Add to team Button that adds to a team mock DB

export default function HeroCard ({ newHero }){
     console.log(newHero, "Response Data fro Hero card")
   
    return(  
            <div className="card">
                <div className="cardBody">
                    <h3>{newHero.team}</h3>
                    <h1>{newHero.superHeroName}</h1>
                    <img src={newHero.image} alt="card"/>
                    <p>{newHero.alliance}</p>
                    <p>{newHero.race}</p>
                    <p>{newHero.weight}</p>
                    <p>{newHero.height}</p>
                    <p>"Civilian Name: "{newHero.civilianName}</p>
                    <p>Hero ID: {newHero.Id}</p>
                    <ul>PowerStats:
                        <li>{newHero.powerStats.combat}</li>
                        <li>{newHero.powerStats.durability}</li>
                        <li>{newHero.powerStats.intelligence}</li>
                        <li>{newHero.powerStats.power}</li>
                        <li>{newHero.powerStats.speed}</li>
                        <li>{newHero.powerStats.strength}</li>
                    </ul> 
                </div>
            </div>
    )
}
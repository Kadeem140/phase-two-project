import React, {useEffect, useState} from 'react';


//Hero Card Blueprint
//Add to team Button that adds to a team mock DB

function HeroCard (hero){
    return(  
            <div className="card">
                <h2>{hero.name}</h2>
                <img src={hero.img} />
                {/* {isAdopted ? null : <button>Adopt</button>} */}
                <p>{abilities}</p>
                <p>{race}</p>
                <p>{weight}</p>
                <p>{height}</p>
                <p>{fullname}</p>
                <p>{id}</p>
                <ul>PowerStats:
                    <li>{powerstats.combat}</li>
                    <li>{powerstats.durability}</li>
                    <li>{powerstats.intelligence}</li>
                    <li>{powerstats.power}</li>
                    <li>{powerstats.speed}</li>
                    <li>{powerstats.strength}</li>
                </ul>
            </div>
    )
}
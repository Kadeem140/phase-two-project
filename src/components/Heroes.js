import React, {useEffect, useState} from 'react';

import HeroCard from './HeroCard';
const axios = require("axios").default;



export default function Heroes(){

  const [heroCardState, SetHeroCardState] = useState("")

  // const [currentHero, setCurrentHero] = useState("")

 


      //button to trigger Post data function
      //Mapp over Heroes Data.DB and render HeroCard for everything in DB

    return (
        <>
        
            
            <h3>Marvel Heroes</h3>
            
            {/* <HeroCard newHero={newHero} postHeroData={postHeroData}/> */}
        </>
    )
}

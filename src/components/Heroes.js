import React, {useEffect, useState} from 'react';
import HeroForm from './HeroForm';
import HeroCard from './HeroCard';
const axios = require("axios");



export default function Heroes(){

  const [currentHero, setCurrentHero] = useState("")

  const newHero = {
    team: "",
    superHeroName: "",
    image: "",
    alliance: "",
    powerStats: {
        combat: "",
        durability: "",
        intelligence: "",
        power: "",
        speed: "",
        strength: ""
    },
    race: "",
    weight: "",
    height: "",
    civilianName: "",
    Id: ""

}

    const options = {
        method: 'GET',
        url: 'https://superhero-search.p.rapidapi.com/api/',
        params: {hero: currentHero},
        headers: {
          'X-RapidAPI-Key': '240350712emsh5a97ea5d5a64d21p141dabjsn6626c8356d49',
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
      };
      
    useEffect(() => {
        axios.request(options)
        .then((res) => {
          console.log(res.data, "Response Data");
          newHero.team = res.data.biography.publisher
          newHero.superHeroName= res.data.name
          newHero.image = res.data.images.md 
          newHero.alliance = res.data.biography.alignment
          newHero.powerStats.combat = res.data.powerstats.combat
          newHero.powerStats.durability = res.data.powerstats.durability
          newHero.powerStats.intelligence = res.data.powerstats.intelligence
          newHero.powerStats.power = res.data.powerstats.power
          newHero.powerStats.speed = res.data.powerstats.speed
          newHero.powerStats.strength = res.data.powerstats.strength
          newHero.race = res.data.appearance.race
          newHero.weight = res.data.appearance.weight[0]
          newHero.height= res.data.appearance.height[0]
          newHero.civilianName = res.data.biography.fullName
          newHero.Id = res.data.id
          console.log(newHero, "NEWHERO!!!")
        })
        .catch(err => console.error(err))
      })
    
    return (
        <>

            <h1>Marvel </h1>
            <p>{currentHero} "p"</p>
            <HeroForm setCurrentHero={setCurrentHero} />
            <HeroCard newHero={newHero} />
        </>
    )
}
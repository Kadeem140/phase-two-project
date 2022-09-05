import React, {useEffect, useState} from 'react';
import HeroCard from './HeroCard';
const axios = require("axios");



function HeroForm({currentHero, setCurrentHero, heroCard, setHeroCard}) {
  //empty newHero object, waiting to be populated by API call response data.
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

  //state to be rendered to screen
 
    //state for API search,
    // const [currentHero, setCurrentHero] = useState("")
    //state for Input value
    const [HeroSearchName, setHeroSearchName] = useState("");  

    //Handle submit sends user input to api call param: hero. 
    function callHero(currentHero){
      axios.get('https://superhero-search.p.rapidapi.com/api/', {
        params: {
          hero: currentHero
        },
        headers: {
          'X-RapidAPI-Key': '240350712emsh5a97ea5d5a64d21p141dabjsn6626c8356d49',
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
      })
      // .then(res => res.data)
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
        setHeroCard(newHero)
      })
      // .then()
      .catch(err => console.log(err))
    }

  
  
    function handleChange (event){
      setHeroSearchName(event.target.value);
      console.log(HeroSearchName, "Current hero name")
    }

    function handleSubmit(event){
      event.preventDefault()
      setCurrentHero(HeroSearchName)
      callHero(HeroSearchName)

    }

    return (

    <>
      <form onSubmit={handleSubmit}>
          <label htmlFor="Hero">Name</label>
          <input type="text" id="Hero" onChange={handleChange} value={HeroSearchName} />
          <button type="submit" >Submit</button>
      </form>
    
      {newHero.team.length > 0 ? <HeroCard newHero={newHero}/> : <p>Didn't work</p>}

      {/* <div className="card">
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
            </div> */}
    </>
    );
  }

  //condition ? exprIfTrue : exprIfFalse
  
  export default HeroForm;

import './App.css';
import Heroes from './components/Heroes';
import HeroForm from './components/HeroForm';
import React, { useEffect, useState} from 'react'
import HeroCard from './components/HeroCard';

function App() {
   //state for API search,
   const [currentHero, setCurrentHero] = useState("")

   const [heroCard, setHeroCard ] = useState({
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

   })

    // const 
    //have a piece of state that is an empty object
    //if object is populated then render it to screen through <HeroCard/>

  return (
    <div className="App">

          <h1>Marvel App</h1>
      <HeroForm 
        currentHero={currentHero} 
        setCurrentHero={setCurrentHero} 
        heroCard={heroCard}
        setHeroCard={setHeroCard}
        />
      <Heroes />

      {heroCard.team.length > 0 ? <HeroCard heroCard={heroCard}/> : <p>Not working</p>}
    </div>
  );
}

export default App;

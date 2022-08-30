import React, {useEffect, useState} from 'react';
import HeroForm from './HeroForm';
const axios = require("axios");



export default function Heroes(){

  const [currentHero, setCurrentHero] = useState("")

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
          console.log(res.data)
        })
        .catch(err => console.error(err))
      }, [currentHero])
    
    return (
        <>

            <h1>Marvel </h1>
            <p>{currentHero} "p"</p>
            <HeroForm setCurrentHero={setCurrentHero} />
        </>
    )
}
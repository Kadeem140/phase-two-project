import React, {useEffect, useState} from 'react';
const axios = require("axios");

export default function Heroes(){

    const options = {
        method: 'GET',
        url: 'https://superhero-search.p.rapidapi.com/api/heroes',
        headers: {
          'X-RapidAPI-Key': '240350712emsh5a97ea5d5a64d21p141dabjsn6626c8356d49',
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
      };
      
      useEffect(() => {
        axios.request(options)
        .then((res) => {
          console.log(res.data)
      }).catch(err => console.error(err))
      }); 
      

    // useEffect(() => {
    //     fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=08378a9086365d74d281997fcbbd323f')
    //       .then((res) => res.json())
    //       .then((items) => console.log(items, "Lets see"));
    //   }, []);
    
    return (
        <>
            <h1>Marvel</h1>
        </>
    )
}
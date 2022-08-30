import React, {useEffect, useState} from 'react';
const axios = require("axios");



function HeroForm({ setCurrentHero }) {
    const [HeroName, setHeroName] = useState("");  

    function handleChange (event){
      setHeroName(event.target.value);
      console.log(HeroName, "Current hero name")
    }

    function handleSubmit(event){
      event.preventDefault()
      setCurrentHero(HeroName)
      console.log(HeroName,'From Hero Form')
    }

    return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="Hero">Name</label>
          <input type="text" id="Hero" onChange={handleChange} value={HeroName} />
          <button type="submit" >Submit</button>
      </form>
    );
  }
  
  export default HeroForm;
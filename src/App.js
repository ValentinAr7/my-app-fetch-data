import React, {useState} from 'react'
import { useEffect } from 'react';

import './App.css';

function App() {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd784bbf8bemsh937dbecae345d21p133f8ejsne9677a6edd2d',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };
  
  fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free', options)
    .then(response => response.json())
    .then(data => console.log(data.hints))
    .then(response => console.log(response))
    .catch(err => console.error(err));


    const [query, setQuery] = useState('')
    const [container, ueContaier] = useState([])


  
  return (

    <div className="App">

      <form>
        <input type='text'></input>
        <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default App;

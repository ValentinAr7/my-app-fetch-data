import React, {useState} from 'react'
import { useEffect } from 'react';

import './App.css';

function App() {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd784bbf8bemsh937dbecae345d21p133f8ejsne9677a6edd2d',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
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

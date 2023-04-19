import React, {useState} from 'react'
import { useEffect } from 'react';

import './App.css';

function App() {
  
  const [query, setQuery] = useState('')        //useState for the input field
  const [container, setContaier] = useState([])   //use state for the array including all items

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd784bbf8bemsh937dbecae345d21p133f8ejsne9677a6edd2d',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };
  
  fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=+${query}`, options)
    .then(response => {return response.json()} )
    .then(data => setContaier(data.hints))    //set the data from the API into the empty array using UseStete.
    .then(response => console.log(response))
    .catch(err => console.error(err));




    function onChangeHandler(e){
      setQuery(e.target.value)

    }

  return (

    <div className="App">

      <form>
        
        
        {/* value = current text typed into the box. */}
        <input type='text' value={query} onChange={onChangeHandler}></input>     


        <button type='submit'>Submit</button>
      </form>


      {container.map((item) => {
        return(
          <p>{item.food.label}</p>
        )
      })}

    </div>
  );
}

export default App;

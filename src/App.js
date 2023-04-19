import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  // Set initial state using useState
  const [query, setQuery] = useState('');
  const [container, setContainer] = useState([]);
  const [endPoint, setEndPoint] = useState('');

  // Fetch data from API using useEffect with dependency on endPoint and query
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd784bbf8bemsh937dbecae345d21p133f8ejsne9677a6edd2d',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      },
    };

    fetch(
      // Use query to filter results from API
      `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=+${query}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setContainer(data.hints.filter((item) => item.food.label.includes(query))))
      .catch((err) => console.error(err));
  }, [endPoint]);

    // Update query state on input change
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

    // Set endPoint state on form submit to trigger useEffect
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEndPoint(query);
  };

  return (
    <div className='App'>
      <form onSubmit={onSubmitHandler}>
        <input type='text' value={query} onChange={onChangeHandler} />
        <button type='submit'>Submit</button>
      </form>

      {container.map((item) => {
        return (
          <div key={item.food.label}>
            <img src={item.food.image} />
            <p>{item.food.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
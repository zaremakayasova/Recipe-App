import React, { useState, useEffect } from 'react';
import './App.css';

import Recipe from './Recipe-component/Recipe';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('strawberry');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async (search) => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };


  return (
    <div className='App'>
      <h1 className='title'>Search Your Recipe</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {
          recipes.map(recipe => (
            <Recipe recipe={recipe} />
          ))
        }
      </div>

    </div>
  );
};

export default App;

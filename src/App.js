import { useState } from 'react';
import { SearchContext, MovieContext } from './context/movieContext';


import MovieData from './components/movieData/MovieData';
import Search from './components/search/SearchList';

import './App.css';


function App() {

	return (
  <div className="App">
    <SearchContext.Provider value={{}}>
      <Search />
    </SearchContext.Provider>
    <MovieContext.Provider value={{}}>
      <MovieData />
    </MovieContext.Provider>
  </div>
  );
}

export default App;

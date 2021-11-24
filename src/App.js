import { useState } from 'react';
import { SearchContext, MovieContext } from './context/movieContext';


import MovieData from './components/movieData/MovieData';
import Search from './components/search/Search';

import './App.css';


function App() {
  let api = process.env.REACT_APP_API_KEY;
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);
  const [searching, setSearching] = useState(false);
  
  async function handleSearchChange(inputValue) {
    setSearchValue(inputValue);

    const response = await fetch(`https://www.omdbapi.com/?apikey=${api}&s=${inputValue}&type=movie`);

    const data = await response.json();

    console.log(data)

    setResults(data.Search || []);
    setSearching(true)
  }

  const searchContextValue = {
    handleSearchChange,
    title: searchValue,
    results,
    searching,
  }

	return (
  <div className="App">
    <SearchContext.Provider value={searchContextValue}>
      <Search />
    </SearchContext.Provider>
    <MovieContext.Provider value={{}}>
      <MovieData />
    </MovieContext.Provider>
  </div>
  );
}

export default App;

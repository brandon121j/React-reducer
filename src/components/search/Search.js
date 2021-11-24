import React, { useContext } from 'react';
import './index.css';
import { SearchContext } from '../../context/movieContext';
import SearchList from './SearchList';

function Search() {
    const { title, handleSearchChange, searching } = useContext(SearchContext);
    return (
        <div className='search'>
            <input
            type='search'
            name='movie-search'
            value={title}
            onChange={(e) => handleSearchChange(e.target.value)}
            />
        { title !== '' && searching && <SearchList />}
        </div>
    )
}

export default Search

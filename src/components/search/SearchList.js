import React, { useContext } from 'react';
import { SearchContext } from '../../context/movieContext';

function SearchList() {
    const { results } = useContext(SearchContext);

    function showMovieList() {
        return results.map((item, index) => {
            return (
                <li key={index}>
                    <img src={item.Poster} alt='Movie poster'/>
                    {item.title}
                </li>
            )
        });
    }

    return (
        <div>
            {showMovieList()}
        </div>
    )
}

export default SearchList

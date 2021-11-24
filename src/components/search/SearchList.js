import React, { useContext } from 'react';
import { SearchContext } from '../../context/movieContext';

function SearchList() {
    const { results } = useContext(SearchContext);
    return (
        <div>
            
        </div>
    )
}

export default SearchList

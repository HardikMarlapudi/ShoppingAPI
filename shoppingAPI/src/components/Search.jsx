import React from 'react';
import '../styles/Search.css';

function Search({search, setSearch}) {

    return (

        <div className="searchContainer">
            <input type="search" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

    )

}

export default Search;

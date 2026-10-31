import React, {useState, useEffect} from 'react';
import Search from "../components/Search.jsx";
import '../styles/Favorites.css';

function Favorites() {

    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites', '[]'));
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    
    const removeFromFavorites = (itemId) => {
        const updatedFavorites = favorites.filter((item) => item.id !== itemId);
        setFavorites(updatedFavorites);
    };

    return (

        <>

        <h2>Favorites</h2>

        <div className="showItems">

            {favorites.length === 0 ? (<p>No favorite items found.</p>) : (

        favorites.map((item) => (
            <div key={item.id} className="productCard">

            <img src={item.thumbnail} alt={item.title} width="170" />

            <h2>{item.title}</h2>
            <h2>${item.price}</h2>
            <h2>{item.category}</h2>

            <button id="removeBtn" onClick={() => removeFromFavorites(item.id)}>Remove</button>

            </div>
        ))
        
        )}

        </div>
    
        </>
    );
}

export default Favorites;

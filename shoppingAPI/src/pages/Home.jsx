import React, { useState, useEffect } from "react";
import Search from "../components/Search.jsx";
import "../styles/Home.css";

function Home() {

    const [item, setItem] = useState([]);
    const [search, setSearch] = useState("");

    const handleAddToFavorites = (item) => {
        const favorites = JSON.parse(localStorage.getItem('favorites', '[]'));

        if(favorites.some((favorites) => favorites.id === item.id)) {
            
            alert("This product has already been added to favorites!");
            return;

        } else {

            const updatedFavorites = [...favorites, item];

            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

            alert(`${item.title} added to Favorites!`);
        } 
    };

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=0")
            .then((response) => response.json())
            .then((data) => setItem(data.products))
            .catch((error) => console.error("Error cannot fatch data.", error));
    }, []);

    const filteredItems = item.filter((item) => {
        return (
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <>

          <Search search={search} setSearch={setSearch} />

            <h2>ShoppingAPI</h2>

            <div className="showItems">
                {filteredItems.map((item) => (
                    <div key={item.id}>
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            width="180"
                        />

                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <p>{item.category}</p>

                        <button id="favoritesBtn" type="button" onClick={() => handleAddToFavorites(item)}>Add to Favorites</button>
                    
                    </div>
                ))}
            </div>

            {filteredItems.length === 0 && (
                <p id="noItems">No items have been found.</p>
            )}
        </>
    );
}

export default Home;

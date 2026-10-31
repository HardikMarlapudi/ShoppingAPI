import React, {useState, useEffect} from 'react';
import '../styles/Navbar.css';

function Navbar() {

    const [isOpen, setIsOpen] = useState();

    const toggleMenu = () => {

        setIsOpen(false);
        
    }

    return (

        <nav className="navbar">

            <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>

                <a href="/home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="/about" onClick={() => setIsOpen(false)}>About</a>
                <a href="/favorites" onClick={() => setIsOpen(false)}>Favorites</a>
                <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
                
            </ul>

        </nav>
    )

}

export default Navbar;

import React, {useState, useEffect} from "react";
import '../styles/Toggle.css';

function Toggle() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.getItem('theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.getItem('theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div>
        <header>

        {/* The button to toggle the boolean state */}
        <button className="toggleBtn" onClick={() => setDarkMode(!darkMode)}>{darkMode ? "☀️" : "🌙"}</button>

        </header>
        </div>
    )

}

export default Toggle;

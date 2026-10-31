import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Favorites from './pages/Favorites.jsx';
import Contact from './pages/Contact.jsx';

function App() {

  return (

    <BrowserRouter>

      <Routes>

       <Route path='/home' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/favorites' element={<Favorites />} />

        <Route path='/contact' element={<Contact />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;

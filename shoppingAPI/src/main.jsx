import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Toggle from './components/Toggle.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Toggle />
    <App />

  </StrictMode>,
)

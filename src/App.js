import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Sobre from './pages/sobre.js';
import GameDev from './pages/gameDev.js';
import WebDev from './pages/wedDev.js';
import MenuBar from './components/menu-bar.js';
import './components/scrollbar.scss';

function App() {
  return (
    <div>
      <Router>
        <MenuBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/gamedev" element={<GameDev />} />
          <Route path="/webdev" element={<WebDev />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

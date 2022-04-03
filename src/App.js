import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from './pages/Player';
import Upload from './pages/Upload';
import './App.css'

const App = () => {
  return (
    <div className='appDiv'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  )
};

export default App;

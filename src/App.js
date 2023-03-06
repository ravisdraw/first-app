import './style.css'
import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useEffect } from 'react';

import Home from './Home Page/Home'
import Project from './Project Page/Project';
// import Certificate from './Certificate Page/Certificate';
import Portolio from './Portfolio Routes/Portolio';

function App() {

  useEffect(() => {
    document.addEventListener('gesturestart', e => e.preventDefault());
  }, []);

  return (
    <div className='body'>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/portfolio/:id" element={<Portolio />} />
      </Routes>
    </div>
  );
}

export default App;

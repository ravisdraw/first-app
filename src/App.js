import './style.css'
import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useEffect } from 'react';

import Home from './Home Page/Home'
import Project from './Project Page/Project';

function App() {

  useEffect(() => {
    document.addEventListener('gesturestart', e => e.preventDefault());
  }, []);

  return (
    <div className='body'>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;

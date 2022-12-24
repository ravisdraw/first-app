import './style.css'

// import ConnectPublicAPI from './components/ConnectPublicAPI'
import Welcome from './Welcome/Welcome';
import Intro from './Welcome/Intro';
import Resume from './Welcome/Resume';
import Menu from './Welcome/Menu';

import React from 'react'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="intro" element={<Intro />} />
        <Route path="intro/resume" element={<Resume />} />
        <Route path="intro/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;

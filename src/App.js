import './style.css'
import ConnectPublicAPI from './components/ConnectPublicAPI'
import Welcome from './Welcome/Welcome';
import Intro from './Welcome/Intro';
import React from 'react'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="intro" element={<Intro />} />
        <Route path="intro/public_api" element={<ConnectPublicAPI />} />
      </Routes>
    </div>
  );
}

export default App;

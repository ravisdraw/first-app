import './style.css'

// import ConnectPublicAPI from './components/ConnectPublicAPI'
import WelcomePage from './Welcome Page/WelcomePage';
import Home from './Home Page/Home'

import React from 'react'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="intro/resume" element={<Resume />} /> */}
      </Routes>
    </div>
  );
}

export default App;

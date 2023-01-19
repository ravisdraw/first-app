import './style.css'

// import ConnectPublicAPI from './components/ConnectPublicAPI'
// import WelcomePage from './Welcome Page/WelcomePage';
import VisitedStatus from './Welcome Page/CheckVisitedStatus'
import Intro from './Welcome/Intro';
import Resume from './Welcome/Resume';
import Menu from './Welcome/Menu';
import Projects from './Projects/Projects'

import React from 'react'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path="/" element={<VisitedStatus />} />
        <Route path="intro" element={<Intro />} />
        <Route path="intro/resume" element={<Resume />} />
        <Route path="intro/menu" element={<Menu />} />
        <Route path="intro/menu/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import './ProjectStyling.css'
import stopwatch from '../Assets/stopwatch.png'

function Projects() {
  return (
    <div className="container">
      <div className='title'>Projects</div>

      <div className='navWrapper'>
        <div className='nav'>JAVASCRIPT</div>
        <div className='nav'>REACT JS</div>
        <div className='nav'>PYTHON</div>
      </div>

      <div className='projectWrapper'>
        <div className='projects'>
          <div className='projectIcon'>
            <img src={stopwatch}></img>
          </div>
          <div className='projectTitle'>
            New Year Counter
          </div>
          <div className='projectTitle daycount'>
            #DAY 1
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects;
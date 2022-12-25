import React from 'react'
import profile from '../Assets/profile.png'
import '../style.css'
// import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className='container intro'>

            <div className='tile title-card'>
                <div className='para-intro'>
                    <p>I’m Ravikumar,</p>
                    <p>a software Developer</p>
                    <p>With 2.5 years of  experience at TCS</p>
                </div>
                <div className='profile'>
                    <img src={profile} alt='hi'></img>
                </div>
            </div>
            <div className='tile project'>
                <div className='titles'>
                    <p>Projects</p>
                </div>
                <div className='project-tiles'>
                    <div className='project-box'></div>
                    <div className='project-box'></div>
                    <div className='project-box'></div>
                    <div className='project-box'></div>
                </div>

            </div>
            <div className='tile certifications'></div>
            <div className='tile nav-menu'></div>
        </div>
    )
}

export default Intro
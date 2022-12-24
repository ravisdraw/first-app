import React from 'react'
import ready from '../Assets/ready.png'
import '../style.css'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className='container'>
            <div className='hello'>
                <img src={ready} alt='hi'></img>
            </div>

            <Link to="projects">
                <div className='button works menu'>
                    <button>Projects</button>
                </div>
            </Link>

            <Link to="/">
                <div className='button works menu'>
                    <button>Certifications</button>
                </div>
            </Link>

            <Link to="/">
                <div className='button works menu'>
                    <button>Experience</button>
                </div>
            </Link>

            <Link to="/">
                <div className='button works menu'>
                    <button>About me</button>
                </div>
            </Link>
        </div>
  )
}

export default Menu
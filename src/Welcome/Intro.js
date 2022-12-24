import React from 'react'
import profile from '../Assets/profile.png'
import '../style.css'
import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className='container'>
            <div className='profile'>
                <img src={profile} alt='hi'></img>
            </div>

            <div className='para'>
                I’m Ravikumar ,
                a software Developer with focus
                on Full stack Development
            </div>

            <div className='para'>
                With 2.5 years of
                experience at TCS where I was
                responsible for Application
                development and Testing.
            </div>
            <div className='group-btn'>
                <div className='button pro'>
                    <button>My Works</button>
                </div>
                <Link to="public_api">
                    <div className='button pro holo'>
                        <button>Resume</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Intro
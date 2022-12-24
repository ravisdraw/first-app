import React from 'react'
import hello from '../Assets/hello.png'
import '../style.css'
import { Link } from "react-router-dom";


function Welcome() {
    return (
        <div className='container'>
            <div className='hello'>
                <img src={hello} alt='https://cdn-icons-png.flaticon.com/512/8027/8027486.png'></img>
            </div>

            <div className='para'>
                Hi there,
                I'm thrilled that you're here
            </div>

            <div className='para'>
                Welcome to my portfolio
                I hope you find something
                that inspires you
            </div>
            <Link to="intro">
                <div className='button'>
                    <button>Get Started</button>
                </div>
            </Link>
        </div>
    )
}

export default Welcome
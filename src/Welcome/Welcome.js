import React from 'react'
import '../style.css'
import { Link } from "react-router-dom";


function Welcome() {
    return (
        <div className='container'>
            <div className='welcome-icon center'>
                <iconify-icon icon="ion:code-slash"></iconify-icon>
            </div>


            <div className='para center'>
                <p>Welcome to my portfolio<br/>I hope you find something that inspires you</p>
            </div>

            <div className='button'>
                <Link to="intro">
                    <button>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome
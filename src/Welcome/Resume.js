import React from 'react'
import peace from '../Assets/peace.png'
import '../style.css'
import { Link } from "react-router-dom";

function Resume() {
    return (
        <div className='container'>
            <div className='hello'>
                <img src={peace} alt='hi'></img>
            </div>

            <div className='para'>
                Thank you for taking
                the time to download the Resume
            </div>

            <div className='para'>
                Could you please
                take a moment to look it.
            </div>
            <Link to="/">
                <div className='button works'>
                    <button>Checkout my Skills</button>
                </div>
            </Link>
        </div>
    )
}

export default Resume
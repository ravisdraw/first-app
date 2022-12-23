import React from 'react'
import hello from '../Assets/hello.png'
import '../style.css'


function Welcome() {
    return (
        <div className='container'>
            <div className='hello'>
                <img src={hello} alt='hi'></img>
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
            <div className='button'>
                 <button>Get Started</button>
            </div>
        </div>
    )
}

export default Welcome
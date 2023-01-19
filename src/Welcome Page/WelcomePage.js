import React from 'react'
import '../Welcome Page/WelcomePage.css'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

function WelcomePage() {
    return (
        <div className='welcome-wrapper'>

            <div className="welcome-elements">

                <div>
                    <Icon icon="ion:code-slash" className='code-slash-icon' />
                </div>

                <div className='para'>
                    <p>Welcome to my portfolio<br />I hope you find something that inspires you</p>
                </div>

                <div className='button'>
                    <Link to="intro">
                        <button>Get Started</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default WelcomePage
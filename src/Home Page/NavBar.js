import React from 'react'
import './Home.css'
import { Icon } from '@iconify/react';
import profile from '../Assets/profile.png'
import { Divide as Hamburger } from 'hamburger-react'

function NavBar() {
    return (
        <div className='nav-bar'>
            <div className="menuicons">

                <div className="mobile-nav">
                    <div className="hamburger">
                        <Hamburger size={28} />
                    </div>
                    <div className="proverb">
                        <p>Practice leads to perfection</p>
                    </div>
                </div>

                <div className="icons">
                    <Icon icon="ic:sharp-home" />
                    <label>Home</label>
                </div>
                <div className="icons">
                    <Icon icon="mdi:vs-code" />
                    <label>Skills</label>
                </div>
                <div className="icons">
                    <Icon icon="mdi:code-braces-box" />
                    <label>Experience</label>
                </div>
                <div className="icons">
                    <Icon icon="ic:baseline-perm-phone-msg" />
                    <label>Hire Me</label>
                </div>
                <div className='profile'>
                    <img src={profile} alt='Profile'></img>
                </div>
            </div>
        </div>
    )
}

export default NavBar
import React from 'react'
import './Home.css'
import { Icon } from '@iconify/react';
import profile from '../Assets/profile.png'

function NavBar() {
    return (
        <div className='nav-bar'>
            <div className="menuicons">
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
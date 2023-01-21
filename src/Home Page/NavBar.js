import React, { useState } from 'react'
import './Home.css'
import { Icon } from '@iconify/react';
import profile from '../Assets/profile.png'
import { Divide as Hamburger } from 'hamburger-react'

const home = (
    <div>
        <Icon icon="ic:sharp-home" />
        <label>Home</label>
    </div>
)

const skills = (
    <div>
        <Icon icon="mdi:vs-code" />
        <label>Skills</label>
    </div>
)
const experience = (
    <div>
        <Icon icon="mdi:code-braces-box" />
        <label>Experience</label>
    </div>
)

const hireMe = (
    <div>
        <Icon icon="ic:baseline-perm-phone-msg" />
        <label>Hire Me</label>
    </div>
)

const profilepic = (
    <div>
        <Icon icon="gg:profile" />
        <label>Profile</label>
    </div>
)

function NavBar() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='nav-bar'>
            <div className="menuicons">

                <div className="mobile-nav">
                    <div className="hamburger" onClick={() => setShowSidebar(!showSidebar)}>
                        <Hamburger size={28} />
                    </div>
                    <div className="proverb">
                        <p>Practice leads to perfection</p>
                    </div>
                </div>

                <div className="icons">
                    {home}
                </div>
                <div className="icons">
                    {skills}
                </div>
                <div className="icons">
                    {experience}
                </div>
                <div className="icons">
                    {hireMe}
                </div>
                <div className='profile'>
                    <img src={profile} alt='Profile'></img>
                </div>
            </div>

            <div className={`nav-menu ${showSidebar ? 'show' : 'hide'}`}>
                <div className="nav-items nav-list">
                    <div className="nav-list">
                        {home}
                    </div>
                </div>
                <div className="nav-items">
                    <div className="nav-list">
                        {skills}
                    </div>
                </div>
                <div className="nav-items">
                    <div className="nav-list">
                        {experience}
                    </div>
                </div>
                <div className="nav-items">
                    <div className="nav-list">
                        {hireMe}
                    </div>
                </div>

                <div className="nav-items">
                    <div className="nav-list">
                        {profilepic}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
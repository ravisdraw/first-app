import React from 'react'
import Navbar from './NavBar'
import Projects from './Projects'
import Certificate from './Certificate'
import Tag from './Tag'
import NavBarMobile from './NavBarMobile'

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Tag />
            <Projects />
            <Certificate />
            <NavBarMobile />
        </div>
    )
}

export default Home
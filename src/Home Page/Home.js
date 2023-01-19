import React from 'react'
import Navbar from './NavBar'
import Projects from './Projects'
import Certificate from './Certificate'
import Tag from './Tag'

function Home() {
    return (
        <div>
            <Navbar />
            <Tag />
            <Projects />
            <Certificate />
        </div>
    )
}

export default Home
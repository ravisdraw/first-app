import React from 'react'
import Navbar from './NavBar'
import Projects from './Projects'
import Certificate from './Certificate'
import Tag from './Tag'

import { tagValues } from '../Assets/constants'

function Home() {
    return (
        <div className='homepage'>
            <Navbar />
            <Tag tagValues={tagValues.home} />
            <Projects />
            <Certificate />
        </div>
    )
}

export default Home
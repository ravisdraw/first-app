import React from 'react'
import Navbar from './NavBar'
import Projects from './Projects'
import Certificate from './Certificate'
import Tag from './Tag'

import { tagValues } from '../Assets/constants'

function Home() {

    let item = tagValues.filter((item) => item.id === Number(0))[0];

    return (
        <div className='homepage'>
            <Navbar />
            <Tag tagValues={item} />
            <Projects />
            <Certificate />
        </div>
    )
}

export default Home
import React from 'react'
import Navbar from '../Home Page/NavBar'
import Tag from '../Home Page/Tag'
import './Certificate.css'

import { tagValues } from '../Assets/constants';

function Certificate() {
    return (
        <div className="certificate-page">
            <Navbar />
            <Tag tagValues={tagValues.projects} />
        </div>
    )
}

export default Certificate
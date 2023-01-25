import React from 'react'
import Navbar from '../Home Page/NavBar'
import Tag from '../Home Page/Tag'
import Flipcard from '../Flipcard/Flipcard';

import './Project.css'

import { tagValues } from '../Assets/constants';
import { projectDetails } from '../Assets/projectData';

function Project() {
    return (
        <div className="project-page">
            <Navbar />
            <Tag tagValues={tagValues.projects} />

            <div className="flipcard">
                {projectDetails.map(item =>
                    <Flipcard cardData={item} key={item.id} />)}
            </div>
        </div>
    );
}

export default Project
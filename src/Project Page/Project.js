import React from 'react'
import Navbar from '../Home Page/NavBar'
import Tag from '../Home Page/Tag'
import Flipcard from '../Flipcard/Flipcard';

import './Project.css'

import { tagValues } from '../Assets/constants';
import projectDetails from '../Assets/projectData'

import { useParams } from "react-router-dom";


function Project() {

    let { id } = useParams();
    let item = tagValues.filter((item) => item.id === Number(id))[0];
    const jsProjects = projectDetails.slice(0, 10);
    const reactProjects = projectDetails.slice(10, 15);

    const projectData = [];

    if (id === '1') {
        projectData.push(...jsProjects);
    } else if (id === '2') {
        projectData.push(...reactProjects);
    }

    return (
        <div className="project-page">
            <Navbar />
            <Tag tagValues={item} />

            <div className="flipcard">
                {projectData.map(item =>
                    <Flipcard cardData={item} key={item.id} />)}
            </div>
        </div>
    );
}

export default Project
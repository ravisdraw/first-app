import React from 'react'
import Sticky from 'react-sticky-el';

import Navbar from '../Home Page/NavBar'
import Tag from '../Home Page/Tag'
import Flipcard from '../Flipcard/Flipcard';
// import TextAnimation from '../TextAnimation/TextAnimation';

import './Project.css'

import { tagValues } from '../Assets/constants';

function Project() {
    return (
        <div className="project-page">

            <Sticky stickyclass='navbar-fixed-top' top='0'>
                <Navbar />
            </Sticky>
            <Tag tagValues={tagValues.projects} />

            <div className="flipcard">
                <Flipcard />
            </div>

            {/* <TextAnimation /> */}

        </div>
    );
}

export default Project
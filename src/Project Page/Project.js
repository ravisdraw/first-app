import React, { useState, useEffect } from 'react'
import Sticky from 'react-sticky-el';

import Navbar from '../Home Page/NavBar'
import Tag from '../Home Page/Tag'

import './Project.css'

import { tagValues } from '../Assets/constants';

function Project() {

    // const [showPopup, setShowPopup] = useState(false);

    // useEffect(() => {
    //     if (showPopup) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "";
    //     }
    // }, [showPopup]);

    const [flipped, setFlipped] = useState(false);

    return (
        <div className="project-page">

            {/* <Sticky stickyclass='navbar-fixed-top' top='0'>
                <Navbar />
            </Sticky>
            <Tag tagValues={tagValues.projects} />
            <div className={`card-project ${showPopup ? 'blur' : ''}`}>
                <div className="cards" onClick={() => setShowPopup(true)}>
                    <div className="project-title">
                        <label>New Year CountDown</label>
                    </div>
                </div>
                <div className="cards">2</div>
                <div className="cards">3</div>
                <div className="cards">4</div>
                <div className="cards">5</div>
            </div>

            {showPopup && (
                <div className="popup-card">
                    <div>Popup Content</div>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
            )} */}

            <div className={`flipcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
                <div className="front">
                    Front of card
                </div>
                <div className="back">
                    Back of card
                </div>
            </div>
        </div>
    );
}

export default Project
import React, { useState } from "react";
import './EpuraaCard.css'

function EpuraaCard() {

    const [isVisible, setIsVisible] = useState(true);

    const imgurl = 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

    return (
        // className={`epuraa-wrapper ${isVisible ? "show" : "hide"}`}
        <div className='epuraa-wrapper'>
            <div className="titlecard">
                <div className={`certificate-title-card ${isVisible ? "show" : "title-hide"}`}>
                    <p>Basics of Python</p>
                </div>
                <div className={`close-btn ${isVisible ? "btn-hide" : "btn-show"}`} onClick={() => setIsVisible(!isVisible)}>
                    <span>x</span>
                </div>
            </div>
            <div className={`second-card ${isVisible ? "hide" : "second-show"}`}>
                <div className="content">
                    <div className="topics-covered-title">Topics Covered</div>
                    <div className="topics-covered">
                        <ul>
                            <li>1. Classes and Strings in python</li>
                            <li>2. Classes and Strings in python</li>
                            <li>3. Classes and Strings in python</li>
                            <li>4. Classes and Strings in python</li>
                            <li>5. Classes and Strings in python</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`first-card ${isVisible ? "show" : "hide"}`}>
                <div className='certificate-image'>
                    <img src={imgurl} alt="React" />
                </div>
                <div className='certificate-title'>
                    <p>Post-ironic helvetica mlkshk, readymade whatever meditation blog offal irony. Pop-up kickstarter seitan iPhone.</p>
                </div>
                <div className="detail-button">
                    <button type="button" onClick={() => setIsVisible(!isVisible)}>Details
                        <span class="arrow">&#9660;</span></button>
                </div>
            </div>

        </div>
    )
}

export default EpuraaCard
import React, { useState } from "react";
import './EpuraaCard.css'

function EpuraaCard() {

    const [isVisible, setIsVisible] = useState(true);

    const imgurl = 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

    return (
        <div className='epuraa-wrapper'>
            <div className={`certificate-image ${isVisible ? "show" : "hide"}`}>
                <img src={imgurl} alt="React" />
            </div>
            <div className={`certificate-title ${isVisible ? "show" : "hide"}`}>
                <p>Post-ironic helvetica mlkshk, readymade whatever meditation blog offal irony. Pop-up kickstarter seitan iPhone.</p>
            </div>
            <div className="detail-button">
                <button type="button" onClick={() => setIsVisible(!isVisible)}>Details
                    <span class="arrow">&#9660;</span></button>
            </div>
        </div>
    )
}

export default EpuraaCard
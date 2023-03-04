import React, { useState } from "react";
import './EpuraaCard.css'
import CoffeeCup from "../Elements/CoffeeCup/CoffeeCup";

function EpuraaCard(props) {

    const [isVisible, setIsVisible] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const cardData = Object.values(props)[0];

    return (
        <div className='epuraa-wrapper'>
            <div className="titlecard">
                <div className={`certificate-title-card ${isVisible ? "title-show main" : "title-hide"}`}>
                    <p>{cardData.front.title}</p>
                </div>
                <div className={`close-btn ${isVisible ? "btn-hide" : "btn-show"}`} onClick={() => setIsVisible(!isVisible)}>
                    <span>x</span>
                </div>
            </div>
            <div className={`second-card ${isVisible ? "second-hide" : "second-show"}`}>
                <div className="content">
                    <div className="topics-covered-title">Topics Covered</div>
                    <div className="topics-covered">
                        <ul>
                            {cardData.back.keyPoints.map((item, index) =>
                                <li key={index}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`first-card ${isVisible ? "show" : "hide"}`}>
                <div className='certificate-image'>
                    <img
                        alt='Preview Not Found'
                        src={cardData.front.img}
                        onLoad={() => setIsLoaded(true)}
                        className={`${isLoaded ? '' : 'hideImage'}`}
                    />
                    {isLoaded ? null : <CoffeeCup />}
                </div>
                <div className='certificate-title'>
                    <p>{cardData.front.desc}</p>
                </div>
                <div className="detail-button">
                    <button type="button" onClick={() => setIsVisible(!isVisible)}>Details
                        <span className="arrow">&#9660;</span></button>
                </div>
            </div>

        </div >
    )
}

export default EpuraaCard
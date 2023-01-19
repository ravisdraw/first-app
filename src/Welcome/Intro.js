import React, {useRef } from 'react'
import profile from '../Assets/profile.png'
import '../style.css'
import { Icon } from '@iconify/react';
// import { Link } from "react-router-dom";


function Intro() {

    const cardContainerRef = useRef(null);
    const cardContainerCertRef = useRef(null);
    const pixelsToScroll = window.innerWidth / 2;

    const handleLeftClick = () => {
        cardContainerRef.current.scrollLeft -= pixelsToScroll;
    }

    const handleRightClick = () => {
        cardContainerRef.current.scrollLeft += pixelsToScroll;
    }

    const handleLeftClickTwo = () => {
        cardContainerCertRef.current.scrollLeft -= pixelsToScroll;
    }

    const handleRightClickTwo = () => {
        cardContainerCertRef.current.scrollLeft += pixelsToScroll;
    }


    const items = [
        { text: "item 1" },
        { text: "item 2" },
        { text: "item 3" },
        { text: "item 4" },
        { text: "item 5" },
        { text: "item 6" },
        { text: "item 7" },
        { text: "item 8" },
        { text: "item 9" },
        { text: "item 10" }
    ]

    return (
        <div className='container intro'>
            <div className='tile nav-menu'>
                <div className="menuicons">
                    <div className="icons">
                        <Icon icon="ic:sharp-home" />
                        <label>Home</label>
                    </div>
                    <div className="icons">
                        <Icon icon="mdi:vs-code" />
                        <label>Skills</label>
                    </div>
                    <div className="icons">
                        <Icon icon="mdi:code-braces-box" />
                        <label>Experience</label>
                    </div>
                    <div className="icons">
                        <Icon icon="ic:baseline-perm-phone-msg" />
                        <label>Hire Me</label>
                    </div>
                    <div className='profile'>
                        <img src={profile} alt='Profile'></img>
                    </div>
                </div>
            </div>
            <div className='tile title-card'>
                <div className='para-intro'>
                    <p>I’m Ravikumar,</p>
                    <p>a software Developer</p>
                    <p>With 2.5 years of  experience at TCS</p>
                </div>
            </div>
            <div className='titles'>
                <p>Projects</p>
            </div>
            <div className='tile project'>
                <div className="card-container" ref={cardContainerRef}>
                    {items.map(item => <div className="card">{item.text}</div>)}
                    {items.length >= 7 &&
                        <button className="card-scroll left" onClick={handleLeftClick}>
                            <Icon icon="material-symbols:arrow-back-ios-rounded" width="32" height="32" /></button>}
                    {items.length >= 7 && <button className="card-scroll right" onClick={handleRightClick}>
                        <Icon icon="material-symbols:arrow-forward-ios-rounded" width="32" height="32" /> </button>}
                </div>
            </div>
            <div className='titles'>
                <p>certifications</p>
            </div>
            <div className='tile certifications'>
                <div className="card-container" ref={cardContainerCertRef}>
                    {items.map(item => <div className="card cert">{item.text}</div>)}
                    {items.length >= 7 &&
                        <button className="card-scroll left" onClick={handleLeftClickTwo}>
                            <Icon icon="material-symbols:arrow-back-ios-rounded" width="32" height="32" /></button>}
                    {items.length >= 7 && <button className="card-scroll right" onClick={handleRightClickTwo}>
                        <Icon icon="material-symbols:arrow-forward-ios-rounded" width="32" height="32" /> </button>}
                </div>
            </div>
        </div>
    )
}

export default Intro
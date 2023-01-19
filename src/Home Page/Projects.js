import React, { useRef } from 'react';
import { Icon } from '@iconify/react';

function Projects() {

    const cardContainerRef = useRef(null);

    const pixelsToScroll = window.innerWidth / 2;

    const handleLeftClick = () => {
        cardContainerRef.current.scrollLeft -= pixelsToScroll;
    }

    const handleRightClick = () => {
        cardContainerRef.current.scrollLeft += pixelsToScroll;
    }

    const items = [
        { text: "item 1" },
        { text: "item 2" },
        { text: "item 3" },
        { text: "item 4" }
    ]
    return (
        <div className='projects'>
            <div className='titles'>
                <p>Projects</p>
            </div>
            <div className='project'>
                <div className="card-container" ref={cardContainerRef}>
                    {items.map(item => <div className="card">{item.text}</div>)}
                    {items.length >= 7 &&
                        <button className="card-scroll left" onClick={handleLeftClick}>
                            <Icon icon="material-symbols:arrow-back-ios-rounded" width="32" height="32" /></button>}
                    {items.length >= 7 && <button className="card-scroll right" onClick={handleRightClick}>
                        <Icon icon="material-symbols:arrow-forward-ios-rounded" width="32" height="32" /> </button>}
                </div>
            </div>
        </div>
    )
}

export default Projects
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
        {
            id: 1,
            text: "Javascript",
            icon: "ph:file-js-fill"
        },
        {
            id: 2,
            text: "React JS",
            icon: "mdi:react"
        },
        {
            id: 3,
            text: "Python",
            icon: "ion:logo-python"
        },
        {
            id: 4,
            text: "UI/UX",
            icon: "ph:figma-logo-duotone"
        },
        {
            id: 5,
            text: "Angular",
            icon: "ph:angular-logo-fill"
        },
        {
            id: 6,
            text: "Real Time Apps",
            icon: "uil:instagram-alt"
        }
    ]
    return (
        <div>
            <div className='titles'>
                <p>Projects</p>
            </div>
            <div className='project'>
                <div className="card-container" ref={cardContainerRef}>
                    {items.map(item =>
                        <div className="card" key={item.id}>
                            <div className="project-icon">
                                <Icon icon={item.icon} className='icon-style' />
                            </div>
                            <div className="project-title">
                                <label> {item.text}</label>
                            </div>
                        </div>)}

                    {/* Arrow Buttons */}
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
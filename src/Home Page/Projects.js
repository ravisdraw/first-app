import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import { icons } from '../Assets/constants';

function Projects() {

    const cardContainerRef = useRef(null);
    const pixelsToScroll = window.innerWidth / 2;
    const handleLeftClick = () => {
        cardContainerRef.current.scrollLeft -= pixelsToScroll;
    }
    const handleRightClick = () => {
        cardContainerRef.current.scrollLeft += pixelsToScroll;
    }

    return (
        <div className='ProjectMain'>
            <div className='titles'>
                <p>Projects</p>
            </div>
            <div className='project'>
                <div className="card-container" ref={cardContainerRef}>
                    {icons.map(item =>
                        <Link to={`/projects/${item.id}`} className="card" key={item.id}>
                            <div className="project-icon">
                                <Icon icon={item.icon} className='icon-style' />
                            </div>
                            <div className="project-title">
                                <label> {item.text}</label>
                            </div>
                        </Link>
                    )
                    }

                    {/* Arrow Buttons */}
                    {icons.length >= 7 &&
                        <button className="card-scroll left" onClick={handleLeftClick}>
                            <Icon icon="material-symbols:arrow-back-ios-rounded" width="32" height="32" /></button>}
                    {icons.length >= 7 && <button className="card-scroll right" onClick={handleRightClick}>
                        <Icon icon="material-symbols:arrow-forward-ios-rounded" width="32" height="32" /> </button>}
                </div>
            </div>
        </div>
    )
}

export default Projects
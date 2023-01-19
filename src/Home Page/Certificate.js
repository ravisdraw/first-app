import React, { useRef } from 'react';
import { Icon } from '@iconify/react';

function Certificate() {

    const cardContainerCertRef = useRef(null);
    const pixelsToScroll = window.innerWidth / 2;

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
        { text: "item 5" }
    ]

    return (
        <div>
            <div className='titles'>
                <p>Certifications</p>
            </div>
            <div className='certifications'>
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

export default Certificate
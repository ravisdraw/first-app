import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import { cardItems } from '../Assets/constants';

function Certificate() {

    const cardContainerCertRef = useRef(null);
    const pixelsToScroll = window.innerWidth / 2;

    const handleLeftClickTwo = () => {
        cardContainerCertRef.current.scrollLeft -= pixelsToScroll;
    }

    const handleRightClickTwo = () => {
        cardContainerCertRef.current.scrollLeft += pixelsToScroll;
    }



    return (
        <div>
            <div className='titles'>
                <p>Certifications</p>
            </div>
            <div className='certifications'>
                <div className="card-container" ref={cardContainerCertRef}>
                    {cardItems.map(item =>
                        <Link to={`/certificate/${item.id}`} className="card cert" key={item.id} style={{ background: item.colors }}>
                            <div className="cert-text">
                                <div className="cert-style title">
                                    <label> {item.title}</label>
                                </div>
                                <div className="cert-style subtitle">
                                    <label> {item.subTitle}</label>
                                </div>
                            </div>
                            <div className="cert-icon">
                                <Icon icon={item.icon} className='icon-style' />
                            </div>
                        </Link>)}



                    {cardItems.length >= 5 &&
                        <button className="card-scroll left" onClick={handleLeftClickTwo}>
                            <Icon icon="material-symbols:arrow-back-ios-rounded" width="32" height="32" /></button>}
                    {cardItems.length >= 5 && <button className="card-scroll right" onClick={handleRightClickTwo}>
                        <Icon icon="material-symbols:arrow-forward-ios-rounded" width="32" height="32" /> </button>}
                </div>
            </div>
        </div>
    )
}

export default Certificate
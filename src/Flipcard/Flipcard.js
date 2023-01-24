import React, { useState } from 'react'
import './Flipcard.css'
import { CSSTransition } from 'react-transition-group'

import FlipcardFront from './FlipcardFront';
import FlipcardBack from './FlipcardBack';

function Flipcard(props) {

    const [showFront, setShowFront] = useState(true);
    const cardData = Object.values(props)[0];

    return (
        <div className='flipcard-container'>
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'>
                <div className="flipcards" onClick={() => {
                    setShowFront((value) => !value);
                }}>
                    <div className="front-side">
                        <FlipcardFront frontdata={cardData.front} />
                    </div>
                    <div className="back-side">
                        <FlipcardBack backdata={cardData.back} />
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Flipcard
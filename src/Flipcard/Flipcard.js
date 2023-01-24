import React, { useState } from 'react'
import './Flipcard.css'
import { CSSTransition } from 'react-transition-group'

import FlipcardFront from './FlipcardFront';
import FlipcardBack from './FlipcardBack';

function Flipcard() {

    const [showFront, setShowFront] = useState(true);

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
                        <FlipcardFront />
                    </div>
                    <div className="back-side">
                        <FlipcardBack />
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Flipcard
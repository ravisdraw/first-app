import React, { useState } from 'react'
import './Flipcard.css'
import { CSSTransition } from 'react-transition-group'

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
                    document.getElementById('flipSound').play();
                }}>
                    <div className="front-side">Front</div>
                    <div className="back-side">Back</div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Flipcard
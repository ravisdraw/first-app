import React, { useState } from 'react';
import './FlipcardSides.css'
import CoffeeCup from '../Elements/CoffeeCup/CoffeeCup';

function FlipcardFront(props) {
    const frontData = Object.values(props)[0];
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className='FlipcardFront'>
            <div className="projectImage">
                <img
                    alt='Preview Not Found'
                    src={frontData.img}
                    onLoad={() => setIsLoaded(true)}
                    className={`${isLoaded ? '' : 'hideImage'}`}
                />
                {isLoaded ? null : <CoffeeCup />}
            </div>

            <div className="projectTitle">
                <label>{frontData.title}</label>
            </div>
        </div>
    )
}

export default FlipcardFront
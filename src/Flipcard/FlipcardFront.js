import React, { useState } from 'react';
import './FlipcardSides.css'

function FlipcardFront(props) {
    const frontData = Object.values(props)[0];
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className='FlipcardFront'>
            {/* <div className="projectImage" style={{
                backgroundImage: `url(${frontData.img})`
            }}></div> */}
            <div className="projectImage">
                <img
                    alt='Preview Not Found'
                    src={frontData.img}
                    onLoad={() => setIsLoaded(true)}
                    className={`${isLoaded ? '' : 'blur'}`}
                />
            </div>

            <div className="projectTitle">
                <label>{frontData.title}</label>
            </div>
        </div>
    )
}

export default FlipcardFront
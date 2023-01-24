import React from 'react'
import './FlipcardSides.css'

function FlipcardFront(props) {
    const frontData = Object.values(props)[0];
    return (
        <div className='FlipcardFront'>
            <div className="projectImage" style={{
                backgroundImage: `url(${frontData.img})`
            }}></div>
            <div className="projectTitle">
                <label>{frontData.title}</label>
            </div>
        </div>
    )
}

export default FlipcardFront
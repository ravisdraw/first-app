import React from 'react'
import './FlipcardSides.css'

function FlipcardBack() {

    const view = () => {
        window.location.href = 'https://ravisdraw.github.io/js-projects/04%20StopWatch/index.html';
    }

    const sourceCode = () => {
        window.location.href = '/Source_code';
    }

    return (
        <div className='FlipcardBack'>
            <div className="Projectdescription">
                <p>New Year Download will show the exact time of the new year</p>
            </div>
            <div className="projectButtonWrapper">
                <div className="projectButtons" >
                    <button onClick={view}>View</button>
                    <button onClick={sourceCode}>Source Code</button>
                </div>
            </div>
        </div>
    )
}

export default FlipcardBack
import React from 'react'
import './FlipcardSides.css'

function FlipcardBack(props) {

    const backData = Object.values(props)[0];
    const view = () => {
        const newTab = window.open(backData.viewUrl, '_blank');
        newTab.focus();
    }

    const sourceCode = () => {
        const newTab = window.open(backData.sourceCode, '_blank');
        newTab.focus();
    }

    const texts = backData.keyPoints;

    return (
        <div className='FlipcardBack'>
            <div className="Projectdescription">
                <p>Key Concepts</p>

                <p className='topicCovered'>
                    {texts[Math.floor(Math.random() * texts.length)]}
                </p>
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
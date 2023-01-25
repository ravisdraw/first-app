import React, { useState, useEffect } from 'react'
import './FlipcardSides.css'

function FlipcardBack(props) {

    const backData = Object.values(props)[0];
    const view = () => {
        window.location.href = backData.viewUrl;
    }

    const sourceCode = () => {
        window.location.href = '/Source_code';
    }

    const texts = backData.keyPoints;

    const [currentText, setCurrentText] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentText(prevText => (prevText + 1) % texts.length);
        }, 5000);
        setIntervalId(id);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='FlipcardBack'>
            <div className="Projectdescription">
                <p>Topics Covered</p>

                <p className='topicCovered'>
                    {texts[currentText]}
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
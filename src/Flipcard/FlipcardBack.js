import React, { useState, useEffect } from 'react'
import './FlipcardSides.css'

function FlipcardBack(props) {

    const backData = Object.values(props)[0];

    const view = () => {
        window.location.href = backData.view;
    }

    const sourceCode = () => {
        window.location.href = '/Source_code';
    }

    const keyPoints = backData.keyPoints;

    // const texts = useMemo(() => console.log(keyPoints), [keyPoints]);
    // const [currentText, setCurrentText] = useState(texts[0]);
    const [index, setIndex] = useState(0); // Initialize the index state to 0

    useEffect(() => {
        function loop() {
            setTimeout(() => {
                setIndex(index + 1); // Increment the index by 1 every 5 seconds
                const len = keyPoints.length;
                if (index === len - 1) setIndex(0);
                // loop();
            }, 5000);
        }
        loop();
    }, [keyPoints, index]);


    return (
        <div className='FlipcardBack'>
            <div className="Projectdescription">
                <p>{backData.sourceCode}</p>
                <p className='topicCovered'>{keyPoints[index]}</p>
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
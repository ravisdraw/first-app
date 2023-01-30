import React, { useState } from 'react'
import './TextAnimation.css'

function TextAnimation({ text }) {
    const [typedText, setTypedText] = useState('');

    React.useEffect(() => {
        let typed = typedText;
        let typing = setInterval(() => {
            if (typed.length === text.length) {
                clearInterval(typing);
                return;
            }
            setTypedText(typed += text[typed.length]);
        }, 40);
        return () => clearInterval(typing);
    }, [typedText, text]);

    return (
        <p>{typedText}</p>
    );
}

export default TextAnimation
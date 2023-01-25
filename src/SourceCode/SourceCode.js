import React, { useState, useEffect } from 'react';
import './SourceCode.css'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { irBlack } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const SourceCode = ({ gistId, token }) => {
    const [gist, setGist] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/gists/${gistId}`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setGist(data);
            });
    }, [gistId, token]);
    console.log(gist);

    return (
        // <pre>
        //     <code>{gist.files && Object.values(gist.files)[0].content}</code>
        // </pre>
        <div className="source-wrapper">
            <div className="keypoints">
                <p>keypoints</p>
            </div>
            <div className="code-wrapper">
                <div className="code-title">
                    <p>index.html</p>
                    <p>Copy Text</p>
                </div>
                <div className="code-snippet">
                    <p>Hello World!</p>
                    {/* <SyntaxHighlighter language='html' style={irBlack}>
                        {gist.files && Object.values(gist.files)[0].content}
                    </SyntaxHighlighter> */}
                </div>
            </div>
            <p>csscode</p>
            <p>jscode</p>
        </div>
    );
};

export default SourceCode;

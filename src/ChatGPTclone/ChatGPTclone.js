import React from 'react'
import './ChatGPTclone.css'

import NavBar from '../Home Page/NavBar'
import SourceCode from '../SourceCode/SourceCode'

const gist_id = '505f8fe16dffb24636542b0801a5b631'
const token = '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'

function ChatGPTclone() {
    return (
        <div className='chatGPT'>
            <NavBar />
            <div className="source-content">
                <SourceCode gistId={gist_id} token={token} />
            </div>
            {/* <div className='sourceCode'>
                <SourceCode gistId={gist_id} token={token} />
            </div> */}
        </div>
    )
}

export default ChatGPTclone
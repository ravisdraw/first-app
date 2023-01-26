import React from 'react'
import './ChatGPTclone.css'
import { GITHUB_TOKEN } from '../config'

import NavBar from '../Home Page/NavBar'
import SourceCode from '../SourceCode/SourceCode'

const gist_id = '505f8fe16dffb24636542b0801a5b631'
const token = GITHUB_TOKEN;

function ChatGPTclone() {
    return (
        <div className='chatGPT'>
            <NavBar />
            <div className="source-content">
                <SourceCode gistId={gist_id} token={token} />
            </div>
        </div>
    )
}

export default ChatGPTclone
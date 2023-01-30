import React from 'react'
import './Home.css'
import TextAnimation from '../TextAnimation/TextAnimation'

function Tag(props) {

    return (
        <div className='tag'>
            <p>{props.tagValues.title}</p>
            <p>{props.tagValues.subTitle}</p>
            <TextAnimation text={props.tagValues.subSubTitle} />
        </div>
    )
}

export default Tag
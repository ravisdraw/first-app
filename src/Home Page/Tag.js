import React from 'react'
import './Home.css'

function Tag(props) {

    return (
        <div className='tag'>
            <p>{props.tagValues.title}</p>
            <p>{props.tagValues.subTitle}</p>
            <p>{props.tagValues.subSubTitle}</p>
        </div>
    )
}

export default Tag
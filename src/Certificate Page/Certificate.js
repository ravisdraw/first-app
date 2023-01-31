import React from 'react'
import Navbar from '../Home Page/NavBar'
import Tag from '../Home Page/Tag'
import EpuraaCard from '../EpuraaCard/EpuraaCard'
import './Certificate.css'

import { cardItems } from '../Assets/constants'
import { useParams } from "react-router-dom";

function Certificate() {

    let { id } = useParams();
    let item = cardItems.filter((item) => item.id === Number(id))[0];

    return (
        <div className="certificate-page">
            <Navbar />
            <Tag tagValues={item} />

            <div className="epuraa-card">
                <EpuraaCard />
            </div>
        </div>
    )
}

export default Certificate
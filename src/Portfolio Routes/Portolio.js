import React from 'react'
import { useParams } from "react-router-dom";
import Certificate from '../Certificate Page/Certificate';
import Skills from '../Skills/Skills';

function Portolio() {

    let { id } = useParams();
    return (
        <div>
            {id === '1' ? <Certificate /> : null}
            {id === '2' ? <Skills /> : null}
        </div>
    )
}

export default Portolio
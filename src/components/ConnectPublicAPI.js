import React, { useEffect, useState } from 'react'
import './CommonStyling.css'
import axios from 'axios'

function ConnectPublicAPI() {

    const[items,setItems] = useState([])

    useEffect(() => {

        axios.get('https://api.disneyapi.dev/characters').then(res => {
            setItems(res.data.data);
        }).catch(err=>{
            console.log(err);
        })
    },[])

    const itemList = items.map((obj)=>{
        return (
            <div className='cards'>
                <div className='image'>
                    <img src={obj.imageUrl}></img>
                </div>
                <div className='name'>
                    {obj.name}
                </div>
            </div>
        )
    // console.log('name '+ obj.name +' img '+ obj.imageUrl);
    })

    return (
        <div className='container public_api'>
            <div className='navBar'>
                DISNEY CHARACTERS
            </div>
            <div className='wrapper'>
                {itemList}
            </div>
        </div>
    )
}

export default ConnectPublicAPI
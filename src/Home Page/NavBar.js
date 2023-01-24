import React, { useState, useEffect, useMemo } from 'react'
import './Home.css'
import { Icon } from '@iconify/react';
import { Divide as Hamburger } from 'hamburger-react'
import { navItems } from '../Assets/constants';
import { Link } from 'react-router-dom';
import { quotes } from '../Assets/constants';


function NavBar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const texts = useMemo(() => quotes, []);
    const [currentText, setCurrentText] = useState(texts[Math.floor(Math.random() * texts.length)]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextText = texts[Math.floor(Math.random() * texts.length)];
            setCurrentText(nextText);
        }, 30000);
        return () => clearInterval(intervalId);
    }, [texts]);  // Add the missing dependency 'texts' here

    useEffect(() => {
        document.body.style.overflow = showSidebar ? "hidden" : "initial";
    }, [showSidebar]);


    return (
        <div className='nav-bar'>
            <div className="menuicons">
                <div className="mobile-nav">
                    <div className="hamburger" onClick={() => setShowSidebar(!showSidebar)}>
                        <Hamburger size={28} />
                    </div>
                    <div className="proverb">
                        <p>{currentText}</p>
                    </div>
                </div>

                {navItems.map(item =>
                    <div className="icons">
                        <Link to={item.path} className='link-style'>
                            <Icon icon={item.icon} />
                            <label>{item.text}</label>
                        </Link>
                    </div>)}
            </div>

            <div className={`nav-menu ${showSidebar ? 'show' : 'hide'}`}>
                {navItems.map(item =>
                    <div className="nav-items">
                        <div className="nav-list">
                            <Link to={item.path} className='link-style'>
                                <Icon icon={item.icon} />
                                <label>{item.text}</label>
                            </Link>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default NavBar
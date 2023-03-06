import React, { useState, useEffect, useMemo } from 'react'
import './Home.css'
import { Icon } from '@iconify/react';
import { Divide as Hamburger } from 'hamburger-react'
import { navItems } from '../Assets/constants';
import { Link } from 'react-router-dom';
import { quotes } from '../Assets/constants';


function NavBar(props) {
    const [activeIndex, setActiveIndex] = useState(props.index);
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

    // setActiveIndex(props);

    function handleTitleClick(index) {
        setActiveIndex(index);
    }


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

                {navItems.map((item, index) =>
                    <div className="icons" key={item.id}>
                        <Link to={item.path} className='link-style' >
                            {/* <Icon icon={item.icon} /> */}
                            <label className={activeIndex === index ? 'nav-active' : ''}
                                onClick={() => handleTitleClick(index)}>{item.text}</label>
                        </Link>
                    </div>)}
            </div>

            <div className={`nav-menu ${showSidebar ? 'show' : 'hide'}`}>
                {navItems.map(item =>
                    <div className="nav-items" key={item.id}>
                        <div className="nav-list">
                            <Link to={item.path} className='link-style' >
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
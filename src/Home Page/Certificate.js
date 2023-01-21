import React, { useRef } from 'react';
import { Icon } from '@iconify/react';

function Certificate() {

    const cardContainerCertRef = useRef(null);
    const pixelsToScroll = window.innerWidth / 2;

    const handleLeftClickTwo = () => {
        cardContainerCertRef.current.scrollLeft -= pixelsToScroll;
    }

    const handleRightClickTwo = () => {
        cardContainerCertRef.current.scrollLeft += pixelsToScroll;
    }

    const iconNames = {
        react: "mdi:react",
        js: "ph:file-js-fill",
        python: "ion:logo-python",
        figma: "ph:figma-logo-duotone",
        angular: "ph:angular-logo-fill",
        insta: "uil:instagram-alt"
    }

    const items = [
        {
            id: 1,
            title: "Basics of Python",
            subTitle: "Source: Udemy & Mothertong",
            icon: iconNames.python,
        },
        {
            id: 2,
            title: "Basics of Java,C,C++",
            subTitle: "Source: Udemy & Mothertong",
            icon: iconNames.react,
        },
        {
            id: 3,
            title: "Basics of React",
            subTitle: "Source: Udemy & Mothertong",
            icon: iconNames.react,
        },
        {
            id: 4,
            title: "Basics of ChatGPT",
            subTitle: "Source: Udemy",
            icon: iconNames.react,
        },
        {
            id: 5,
            title: "Basics of Angular JS",
            subTitle: "Source: Udemy & Mothertong",
            icon: iconNames.angular,
        },
        {
            id: 6,
            title: "Other Certifications",
            subTitle: "Includes: Automation,Designing.. ",
            icon: iconNames.react,
        }
    ]

    return (
        <div>
            <div className='titles'>
                <p>Certifications</p>
            </div>
            <div className='certifications'>
                <div className="card-container" ref={cardContainerCertRef}>
                    {items.map(item =>
                        <div className="card cert" key={item.id}>
                            <div className="cert-text">
                                <div className="cert-style title">
                                    <label> {item.title}</label>
                                </div>
                                <div className="cert-style subtitle">
                                    <label> {item.subTitle}</label>
                                </div>
                            </div>
                            <div className="cert-icon">
                                <Icon icon={item.icon} className='icon-style' />
                            </div>
                        </div>)}



                    {items.length >= 7 &&
                        <button className="card-scroll left" onClick={handleLeftClickTwo}>
                            <Icon icon="material-symbols:arrow-back-ios-rounded" width="32" height="32" /></button>}
                    {items.length >= 7 && <button className="card-scroll right" onClick={handleRightClickTwo}>
                        <Icon icon="material-symbols:arrow-forward-ios-rounded" width="32" height="32" /> </button>}
                </div>
            </div>
        </div>
    )
}

export default Certificate
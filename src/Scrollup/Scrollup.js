import React, { useState, useEffect } from "react";
import './Scrollup.css'

function Scrollup() {
    const [showButton, setShowButton] = useState(false);
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

    useEffect(() => {
        function handleScroll() {
            const currentScrollPos = window.pageYOffset;
            setShowButton(prevScrollpos > currentScrollPos);
            setPrevScrollpos(currentScrollPos);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollpos]);

    useEffect(() => {
        function handleTop() {
            if (window.pageYOffset === 0)
                setShowButton(false);
        }
        window.addEventListener("scroll", handleTop);
        return () => {
            window.removeEventListener("scroll", handleTop);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {showButton &&
                <button className="scroll-to-top-button" onClick={handleClick}>
                    Scroll to Top
                </button>}
        </>
    );
}

export default Scrollup
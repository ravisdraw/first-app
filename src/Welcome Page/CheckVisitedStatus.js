import React, { useEffect, useState } from 'react'
import WelcomePage from './WelcomePage';
import Home from '../Home Page/home'

function CheckVisitedStatus() {
    const [hasVisited, setHasVisited] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem('hasVisited');
        if (!visited) {
            // This is the first visit, set the state and local storage
            setHasVisited(true);
            localStorage.setItem('hasVisited', true);
        }
    }, []);

    if (!hasVisited) {
        return <WelcomePage />;
    }

    return <Home />;
}

export default CheckVisitedStatus
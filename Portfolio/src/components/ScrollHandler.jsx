import React from 'react';

const ScrollHandler = ({ children }) => {
    const handleScroll = (e) => {
        e.preventDefault();

        const zone1 = document.getElementById('zone1');
        const zone2 = document.getElementById('zone2');
        const zone3 = document.getElementById('zone3');

        const zone1Bounding = zone1.getBoundingClientRect();
        const zone2Bounding = zone2.getBoundingClientRect();
        const zone3Bounding = zone3.getBoundingClientRect();

        // Scroll vers la Zone 2 (depuis Zone 1)
        if (e.deltaY > 0 && zone1Bounding.top >= 0 && zone1Bounding.top < window.innerHeight) {
            zone2.scrollIntoView({ behavior: 'smooth' });
        }
        // Scroll vers la Zone 3 (depuis Zone 2)
        else if (e.deltaY > 0 && zone2Bounding.top >= 0 && zone2Bounding.top < window.innerHeight) {
            zone3.scrollIntoView({ behavior: 'smooth' });
        }
        // Scroll vers la Zone 2 (depuis Zone 3)
        else if (e.deltaY < 0 && zone3Bounding.left >= 0 && zone3Bounding.left < window.innerWidth) {
            zone2.scrollIntoView({ behavior: 'smooth' });
        }
        // Scroll vers la Zone 1 (depuis Zone 2)
        else if (e.deltaY < 0 && zone2Bounding.top >= 0 && zone2Bounding.top < window.innerHeight) {
            zone1.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div onWheel={handleScroll} className="h-screen overflow-hidden relative">
            {children}
        </div>
    );
};

export default ScrollHandler;

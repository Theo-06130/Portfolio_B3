import React, { useEffect } from 'react';

const ScrollHandler = ({ children }) => {
    const handleClick = () => {
        const zone1 = document.getElementById('zone1');
        const zone2 = document.getElementById('zone2');
        const zone3 = document.getElementById('zone3');
        const zone4 = document.getElementById('zone4');
        const zone5 = document.getElementById('zone5');
        const zone6 = document.getElementById('zone6');
        const zone7 = document.getElementById('zone7');

        const zone1Bounding = zone1.getBoundingClientRect();
        const zone2Bounding = zone2.getBoundingClientRect();
        const zone3Bounding = zone3.getBoundingClientRect();
        const zone4Bounding = zone4.getBoundingClientRect();
        const zone5Bounding = zone5.getBoundingClientRect();
        const zone6Bounding = zone6.getBoundingClientRect();
        const zone7Bounding = zone7.getBoundingClientRect();

        if (zone1Bounding.top >= 0 && zone1Bounding.top < window.innerHeight) {
            zone2.scrollIntoView({ behavior: 'smooth' });
        } else if (zone2Bounding.top >= 0 && zone2Bounding.top < window.innerHeight) {
            zone3.scrollIntoView({ behavior: 'smooth' });
        } else if (zone3Bounding.top >= 0 && zone3Bounding.top < window.innerHeight) {
            zone4.scrollIntoView({ behavior: 'smooth' });
        } else if (zone4Bounding.top >= 0 && zone4Bounding.top < window.innerHeight) {
            zone5.scrollIntoView({ behavior: 'smooth' });
        } else if (zone5Bounding.top >= 0 && zone5Bounding.top < window.innerHeight) {
            zone6.scrollIntoView({ behavior: 'smooth' });
        } else if (zone6Bounding.top >= 0 && zone6Bounding.top < window.innerHeight) {
            zone7.scrollIntoView({ behavior: 'smooth' });
        } else if (zone7Bounding.top >= 0 && zone7Bounding.top < window.innerHeight) {
            zone1.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === ' ' || e.key === 'ArrowDown') {
            handleClick();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div onClick={handleClick} className="h-screen overflow-hidden relative">
            {children}
            <div className="absolute bottom-0 w-full h-20 bg-transparent cursor-pointer"></div>
        </div>
    );
};

export default ScrollHandler;

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
            alert("visible")
        } else {
            setIsVisible(false);
            alert("invisible")
        }
    };

    const scrollToPreviousZone = () => {
        const zones = [
            document.getElementById('zone1'),
            document.getElementById('zone2'),
            document.getElementById('zone3'),
            document.getElementById('zone4'),
            document.getElementById('zone5'),
            document.getElementById('zone6'),
            document.getElementById('zone7'),
        ];

        // Trouver la zone actuelle
        const currentZoneIndex = zones.findIndex((zone) => {
            const bounding = zone.getBoundingClientRect();
            return bounding.top >= 0 && bounding.top < window.innerHeight;
        });

        // Remonter d'une zone si possible
        if (currentZoneIndex > 0) {
            zones[currentZoneIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <div
                onClick={scrollToPreviousZone}
                className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-3 cursor-pointer shadow-lg md:block" // md:hidden cache le bouton sur les écrans plus grands
                style={{ zIndex: 1000 }}
            >
                ↑ {/* Flèche de remontée */}
            </div>
        )
    );
};

export default ScrollToTopButton;

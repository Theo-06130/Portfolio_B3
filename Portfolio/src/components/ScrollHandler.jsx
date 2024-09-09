import React, { useState, useEffect } from 'react';

const ScrollHandler = ({ children }) => {
    const [currentZone, setCurrentZone] = useState(1);

    const handleClick = () => {
        const zones = Array.from(document.querySelectorAll('[id^=zone]'));
        const currentZoneIndex = zones.findIndex(zone => {
            const rect = zone.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight;
        });

        if (currentZoneIndex !== -1) {
            const nextZoneIndex = (currentZoneIndex + 1) % zones.length;
            setCurrentZone(nextZoneIndex + 1);
            zones[nextZoneIndex].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToPreviousZone = () => {
        const zones = Array.from(document.querySelectorAll('[id^=zone]'));
        const currentZoneIndex = zones.findIndex(zone => {
            const rect = zone.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight;
        });

        if (currentZoneIndex !== -1) {
            const previousZoneIndex = (currentZoneIndex - 1 + zones.length) % zones.length;
            setCurrentZone(previousZoneIndex + 1);
            zones[previousZoneIndex].scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Ajouter le gestionnaire de clic pour descendre d'une zone
        window.addEventListener('click', handleClick);

        return () => {
            // Nettoyer le gestionnaire lors du démontage du composant
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="h-screen overflow-hidden relative">
            {children}
            <div
                onClick={(e) => {
                    e.stopPropagation(); // Empêcher le clic sur le bouton d'être capturé par le gestionnaire de clic de la page
                    handleScrollToPreviousZone();
                }}
                className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-3 cursor-pointer shadow-lg"
                style={{ zIndex: 1000 }}
            >
                ↑ {/* Utiliser un caractère ou une icône pour la flèche */}
            </div>
        </div>
    );
};

export default ScrollHandler;

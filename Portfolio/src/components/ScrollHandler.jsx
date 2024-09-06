import React, { useState } from 'react';

const ScrollHandler = ({ children }) => {
    // Variables pour gérer les événements tactiles
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

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

    // Gestion des événements tactiles pour mobile
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        setStartX(touch.clientX);
        setStartY(touch.clientY);
    };

    const handleTouchMove = (e) => {
        if (!startX || !startY) {
            return;
        }

        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        const zone1 = document.getElementById('zone1');
        const zone2 = document.getElementById('zone2');
        const zone3 = document.getElementById('zone3');

        const zone1Bounding = zone1.getBoundingClientRect();
        const zone2Bounding = zone2.getBoundingClientRect();
        const zone3Bounding = zone3.getBoundingClientRect();

        // Détection d'un glissement vertical (vers le bas)
        if (deltaY > 50 && zone1Bounding.top >= 0 && zone1Bounding.top < window.innerHeight) {
            zone2.scrollIntoView({ behavior: 'smooth' });
        }
        // Glissement vertical pour aller à la Zone 3 (vers le bas, depuis la Zone 2)
        else if (deltaY > 50 && zone2Bounding.top >= 0 && zone2Bounding.top < window.innerHeight) {
            zone3.scrollIntoView({ behavior: 'smooth' });
        }
        // Glissement vertical pour revenir à la Zone 2 (vers le haut, depuis la Zone 3)
        else if (deltaY < -50 && zone3Bounding.left >= 0 && zone3Bounding.left < window.innerWidth) {
            zone2.scrollIntoView({ behavior: 'smooth' });
        }
        // Glissement vertical pour revenir à la Zone 1 (vers le haut, depuis la Zone 2)
        else if (deltaY < -50 && zone2Bounding.top >= 0 && zone2Bounding.top < window.innerHeight) {
            zone1.scrollIntoView({ behavior: 'smooth' });
        }

        // Réinitialiser les positions de départ après le mouvement
        setStartX(0);
        setStartY(0);
    };

    return (
        <div
            onWheel={handleScroll}  // Pour le défilement sur desktop
            onTouchStart={handleTouchStart}  // Pour détecter le début du glissement sur mobile
            onTouchMove={handleTouchMove}    // Pour gérer le glissement sur mobile
            className="h-screen overflow-hidden relative"
        >
            {children}
        </div>
    );
};

export default ScrollHandler;

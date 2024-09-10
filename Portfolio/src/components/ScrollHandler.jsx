import React, { useEffect, useState } from 'react';

const ScrollHandler = ({ children }) => {
    const [currentZone, setCurrentZone] = useState(1);

    const handleScroll = (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            // Scroll vers le bas, donc aller à la zone suivante
            goToNextZone();
        } else {
            // Scroll vers le haut, donc revenir à la zone précédente
            goToPrevZone();
        }
    };

    const goToNextZone = () => {
        const nextZone = currentZone + 1;
        const targetZone = document.getElementById(`zone${nextZone}`);
        if (targetZone) {
            targetZone.scrollIntoView({ behavior: 'smooth' });
            setCurrentZone(nextZone);
        }
    };

    const goToPrevZone = () => {
        const prevZone = currentZone - 1;
        const targetZone = document.getElementById(`zone${prevZone}`);
        if (targetZone) {
            targetZone.scrollIntoView({ behavior: 'smooth' });
            setCurrentZone(prevZone);
        }
    };

    const handleClickOnPage = () => {
        goToNextZone();
    };

    const handleKeyPress = (e) => {
        if (e.key === ' ' || e.key === 'ArrowDown') {
            goToNextZone();
        } else if (e.key === 'ArrowUp') {
            goToPrevZone();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentZone]);

    return (
        <div onClick={handleClickOnPage} className="h-screen overflow-hidden relative">
            {children}

            {/* Bouton pour remonter d'une zone */}
            <div
                onClick={(e) => {
                    e.stopPropagation(); // Pour éviter le conflit avec le clic de descente
                    goToPrevZone();
                }}
                className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-3 cursor-pointer shadow-lg"
                style={{ zIndex: 1000 }}
            >
                ↑ {/* Utiliser une icône ou caractère pour la flèche */}
            </div>
        </div>
    );
};

export default ScrollHandler;

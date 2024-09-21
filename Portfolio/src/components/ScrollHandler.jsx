import React, { useEffect, useState } from 'react';
import PulsatingButton from "@/components/magicui/pulsating-button";

const ScrollHandler = ({ children }) => {
    const [currentZone, setCurrentZone] = useState(1);

    const handleScroll = (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            goToNextZone();
        } else {
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
            {/* Passer currentZone comme prop aux enfants */}
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { currentZone })
            )}

            {/* Bouton pour remonter d'une zone */}
            <PulsatingButton
                onClick={(e) => {
                    e.stopPropagation();
                    goToPrevZone();
                }}
                className="fixed z-40 bottom-5 w-12 h-12 right-5 rounded-full bg-[#2E124E] text-white transition-all duration-300 hover:bottom-7 hover:w-14 hover:h-14"
            >
                ↑
            </PulsatingButton>
        </div>
    );
};

export default ScrollHandler;
